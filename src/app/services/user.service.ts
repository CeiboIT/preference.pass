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
    return new Promise((resolve, reject) => {
      const GET_CURRENT_USER = gql`
        query GetCurrentUser {
          user {
            id
            name 
            picture
          }
        }
      `;

      this.client.query({
        query: GET_CURRENT_USER
      }).subscribe((result) => {
        console.log(result);
        resolve(result['data']['user']);
      });
    });

  }
}
