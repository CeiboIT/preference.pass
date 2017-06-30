import { Injectable } from '@angular/core';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import gql from 'graphql-tag';
import {User} from '../models/user';
@Injectable()
export class UserService {
  constructor(private client: Apollo) { }
  createUser(userData: User) {
    const _createUser =  gql`
      mutation {
        
      }
    `;
  }
}
