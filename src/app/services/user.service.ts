import { Injectable } from '@angular/core';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import gql from 'graphql-tag';
import {User} from '../models/user';
@Injectable()
export class UserService {
  constructor(private client: Apollo) { }
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

  getCurrentUser() {
      const GET_CURRENT_USER = gql`
        query GetCurrentUser {
          user {
            id
            name 
            picture
            subscription {
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
        query: GET_CURRENT_USER
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

  createUserCompanion(companionData, userId) {
      const CREATE_COMPANION = gql`
        mutation NewCompanion(
          $fullName: String!
          $email: String
          $type: String!
          $companionOwnerId: String
        ) {
          createCompanion(
            fullName: $fullName
            email: $email
            type: $type
            companionOwnerId: $companionOwnerId
          ) {
            id
          }
        }
      `;

      return this.client.mutate({
        mutation: CREATE_COMPANION
      });
    }
}
