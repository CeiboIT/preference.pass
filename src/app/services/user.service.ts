import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import {User} from '../models/user';
import {Store} from '@ngrx/store';
import {OpenOnBoarding} from '../actions/layout';
import {getUserIdFromToken, hasSubscription, isSubscriptionValid} from '../utils/user';
import {Observable} from 'rxjs/Observable';
const _now = new Date().toISOString();

interface ModalCallOptions {
  onErrorRedirect?: string;
  onSuccessRedirect?: string;
}

const CREATE_COMPANION = gql`
  mutation NewCompanion(
  $fullName: String!
  $email: String
  $personType: PersonType!
  $companionOwnerId: ID!
  ) {
    createCompanion(
      fullName: $fullName
      email: $email
      personType: $personType
      companionOwnerId: $companionOwnerId
    ) {
      id
    }
  }
`;

const UPDATE_USER_PHONE_NUMBER = gql`  
  mutation UpdateUserPhoneNumber ($phoneNumber: String! $id: ID!) {
    updateUser(id: $id phoneNumber: $phoneNumber ) {
      id
    }
  }
`;

const ADD_COMPANION_TO_SUBSCRIPTION = gql`
  mutation addCompanionToSubscription($subscriptionId: ID! $companionId: ID!) {
    addToSubscriptionOnCompanion(
      companionsCompanionId: $companionId
      subscriptionsPPSubscriptionId: $subscriptionId) {
      companionsCompanion { id }
      subscriptionsPPSubscription {id}
    }
  }
`;

@Injectable()
export class UserService {
  constructor(private client: Apollo, private store: Store<any>) { }
  createUser(userData: User) {

    const _createUser =  gql`
      mutation userCreation(
        $email: String!,
        $birthDate: Int!,
        $firstName: String!,
        $lastName: String!,
        $picture: String!,
        $idToken: String!
      ) {
        createUser(
          authProvider: {auth0: {idToken: $idToken} },
          email: $email, 
          birthDate: $birthDate,
          firstName: $firstName,
          lastName: $lastName,
          picture: $picture
        ) {
          id
        }
      }
    `;

    return this.client.mutate({
      mutation:  _createUser,
      variables: {
        email : userData.email,
        birthDate: userData.birthDate,
        firstName: userData.firstName,
        lastName: userData.lastName,
        picture: userData.picture
      }
    });
  }

  updateUser(payload) {
    const userId = getUserIdFromToken();
    if (payload.phoneNumber) {
        return this.client.mutate({
          mutation : UPDATE_USER_PHONE_NUMBER,
          variables: {
            id: userId,
            phoneNumber: payload.phoneNumber
          }
        });
    }
  }

  getCurrentUser() {
    const _now = new Date().toISOString();
    const GET_CURRENT_USER = gql`
        query GetCurrentUser($now: DateTime!) {
          user {
            id
            name 
            picture
            phoneNumber
            reservations(filter: {
              status: Completed
            }) {
              kidsAmount
              adultsAmount
              isComingAlone
              executionDate
              pickUpLocation {
                name
                mainPhoto
                formattedAddress
              }
              activity {
                name
                headline
                mainPhoto
                area {
                  name
                  formatedAddress
                }
                startsAt
                category {
                  name
                }
              }
            }
            
            discountCodes(filter: {
              used: false
            }, first: 1) {
              id
            }
            
            subscriptions(filter: {
              validity_gt: $now
            }) {
              id
              adults
              validity
              startsAt
              kids
              isComingAlone
              companions {
                id
                fullName
                type
                personType
                email
              }
            }
            
            preferencePassCard {
              id
              code
            }
            companions {
              id
              fullName
              email
              personType
              type
              subscriptions {
                id
              }
            }
          }
        }
      `;

      return this.client.watchQuery({
        query: GET_CURRENT_USER,
        variables: {
          now: _now
        },
        fetchPolicy: 'network-only'
      });
  }

  getUserCompanions() {
    const GET_USER_COMPANIONS = gql`
      query{
        user {
          id
          companions {
            id
            fullName
            email
            type
            personType
            subscriptions {
              id
            }
          }
        }
      }
    `;
    return this.client.watchQuery({
      query: GET_USER_COMPANIONS,
      fetchPolicy: 'network-only'
    });
  }

  getUserSubscriptionAndDiscounts() {
    const _now = new Date().toISOString();
    const GET_SUBSCRIPTION = gql`
      query GetSubscription($now: DateTime!) {
        user {
          subscriptions {
            id
            adults
            validity
            kids
            isComingAlone
            companions {
              id
              fullName
              email
              type
              personType
            }
          }
        }
        discountCodes(filter: {
          used: false
        }) {
          id
        }
        
      }
    `;

    return this.client.watchQuery({
      query: GET_SUBSCRIPTION,
      variables: {
        now: _now
      },
      fetchPolicy: 'network-only'
    });
  }

  createUserCompanion(companionData) {
      const userId = getUserIdFromToken();
      return this.client.mutate({
        mutation: CREATE_COMPANION,
        variables: {
          fullName: companionData.fullName,
          email: companionData.email,
          personType: companionData.personType,
          companionOwnerId: userId
        }
      }).toPromise();
    }

    checkSubscription = (user, openModal, cb?) => {
      let valid = false;
      if (user && user.id && hasSubscription(user) && isSubscriptionValid(user)) {
        valid = true;
      }
      if (cb && !openModal) {
        cb(valid);
      }
    };

    checkUserCompletion(user, cb?, notOpenModal?, options?: ModalCallOptions) {
      let goToNext = true;
      if (user && user.id && !hasSubscription(user) && !notOpenModal) {
        this.store.dispatch(new OpenOnBoarding({startOnStep: 1, options}));
        goToNext = false;
      }
      if (cb) {
        cb(goToNext);
      }
    }


    addCompanionsToTrip(companions, subscriptionId) {
      return new Promise((resolve, reject) => {
          let _promises = [];
          companions.map(companion => {
            if (!companion.id) {
              _promises.push(this.addCompanionToSubscriptionAndUser(companion, subscriptionId, true));
            } else {
              _promises.push(this.addCompanionToSubscription(companion.id, subscriptionId));
            }
          });
          if ( _promises.length) {
            Promise.all(_promises)
              .then(results => {
                console.log(results);
                resolve(results);
              })
              .catch(err => reject(err));
          } else {
            resolve();
          }
      });
    }


    addCompanionToSubscription(companionId, subscriptionId) {
      return this.client.mutate({
        mutation: ADD_COMPANION_TO_SUBSCRIPTION,
        variables: {
          companionId: companionId,
          subscriptionId: subscriptionId
        }
      }).toPromise();
    }

    addCompanionToSubscriptionAndUser(companionData, subscriptionId, asPromise?) {
      const userId = getUserIdFromToken();
      if (!asPromise) {
        return Observable.create(observer => {
          this.client.mutate({
            mutation: CREATE_COMPANION,
            variables: {
              fullName: companionData.fullName,
              email: companionData.email,
              personType: companionData.personType,
              companionOwnerId: userId
            }
          }).toPromise()
            .then((result) => {
              const _data = result.data['createCompanion'];
              this.addCompanionToSubscription(_data.id, subscriptionId).then(compResult => {
                observer.next(compResult);
              });
            });
        });
      } else {
        return new Promise((resolve, reject) => {
            this.client.mutate({
              mutation: CREATE_COMPANION,
              variables: {
                fullName: companionData.fullName,
                email: companionData.email,
                personType: companionData.personType,
                companionOwnerId: userId
              }
            }).toPromise()
              .then((result) => {
                const _data = result.data['createCompanion'];
                this.addCompanionToSubscription(_data.id, subscriptionId).then(compResult => {
                  resolve(compResult);
                }).catch(err => reject(err));
              }).catch(err => reject(err));
        });
      }
    }

    authenticateUser(idToken, accessToken) {
      const AUTHENTICATE_USER = gql`
        mutation authenticateAuth0User($idToken: String!, $accessToken: String!) {
          authenticateAuth0User(idToken: $idToken, accessToken: $accessToken) {
            token
          }
        }
      `;

      return this.client.mutate({
        mutation: AUTHENTICATE_USER,
        variables: {
          idToken: idToken,
          accessToken: accessToken
        }
      });
    }

}
