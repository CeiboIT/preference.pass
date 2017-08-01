import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import {Reservation} from '../models/reservation';

@Injectable()
export class ReservationsService {
  constructor(private client: Apollo) { }
  createReservation(data: Reservation) {
    const CREATE_RESERVATION = gql`      
      mutation reservation(
      $companionsIds: [ID],
      $pickUpLocationId: String!,
      $executionDate: DateTime!,
      $pickUpTime: String!,
      $activityId: ID!,
      $ownerId: ID!
      ){
        createReservation( 
          companionsIds: $companionsIds,
          pickUpLocationId: $pickUpLocationId
          executionDate: $executionDate
          pickUpTime: $pickUpTime
          activityId: $activityId,
          ownerId: $ownerId
        ) {
          id
        }
      }
    `;

    return this.client.mutate({
        mutation: CREATE_RESERVATION,
        variables: data
      }
    );
  }
}
