import { Injectable } from '@angular/core';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
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

const ADD_COMPANION_TO_SUBSCRIPTION = gql`
  mutation addCompanionToSubscription($subscriptionId: ID! $companionId: ID!) {
    addToSubscriptionOnCompanion(
      companionsCompanionId: $companionId
      subscriptionsSubscriptionId: $subscriptionId) {
      companionsCompanion { id }
      subscriptionsSubscription {id}
    }
  }
`;

@Injectable()
export class UserService {
  constructor(private client: Apollo, private store: Store<any>) { }
  createUser(userData: User) {
    console.warn('createUser ',userData);

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

  getCurrentUser() {
    const _now = new Date().toISOString();
    const GET_CURRENT_USER = gql`
        query GetCurrentUser($now: DateTime!) {
          user {
            id
            name 
            picture
            discountCodes(filter: {
              used: false
            }) {
              id
            }
            
            subscription(filter: {
              validity_gt: $now
            }) {
              id
              adults
              validity
              kids
              isComingAlone
              companions {
                id
                fullName
                type
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
              type
            }
          }
        }
      `;

      return this.client.watchQuery({
        query: GET_CURRENT_USER,
        variables: {
          now: _now
        },
        fetchPolicy: "network-only"

      });
  }

  getUserCompanions() {
    const GET_USER_COMPANIONS = gql`
      query{
        user {
          id
          companions {
            fullName
            email
            type
          }
        }
      }
    `;
    this.client.watchQuery({
      query: GET_USER_COMPANIONS
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
              type
              email
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
      }
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
      });
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

    addCompanionToSubscriptionAndUser(companionData, subscriptionId) {
      const userId = getUserIdFromToken();
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
            this.client.mutate({
              mutation: ADD_COMPANION_TO_SUBSCRIPTION,
              variables: {
                companionId: _data.id,
                subscriptionId: subscriptionId
              }
            }).toPromise().then(compResult => {
              observer.next(compResult);
            });
          });
      });
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
