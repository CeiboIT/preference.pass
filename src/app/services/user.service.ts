import { Injectable } from '@angular/core';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import gql from 'graphql-tag';
import {User} from '../models/user';
import {Store} from '@ngrx/store';
import {OpenOnBoarding} from '../actions/layout';
import {hasPreferencePassCard, hasSubscription, isSubscriptionValid} from "../utils/user";


interface ModalCallOptions {
  onErrorRedirect?: string;
  onSuccessRedirect?: string;
}

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

  createUserCompanion(companionData, userId) {
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
