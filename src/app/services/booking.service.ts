import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {Observable} from "rxjs/Observable";
import {isComingAlone} from "../utils/user";
function checkIfComingAlone(payload) {
  return (!payload.kidsAmount && !payload.adultsAmount);
}

const GET_VALID_SUBSCRIPTION = gql`
  query GetBookingFittingSubscription($bookingDate: DateTime!) {
    user {
      subscriptions(filter: {
        validity_gt: $bookingDate,
        startsAt_lt: $bookingDate
      }) {
        id
        kids
        adults
        isComingAlone
        companions {
          id
          fullName
          email
          personType
        }
      }
      id
    }
  }
`;

@Injectable()
export class BookingService {

  constructor(private client: Apollo) { }

  completeBooking(payload) {
    const COMPLETE_BOOKING = gql`
      
      mutation CompleteBooking(
        $reservationId: ID!,
        $companionsIds: [ID!],
        $subscriptionId: ID!,
        $status: BookingState
      ) {
        updateReservation(
          id: $reservationId,
          companionsIds: $companionsIds,
          status: $status,
          subscriptionId: $subscriptionId
        ) {
          id
        }
      }
      
    `;

    return this.client.mutate({
      mutation: COMPLETE_BOOKING,
      variables: {
        reservationId: payload.reservationId,
        companionsIds: payload.companionsIds,
        status: 'Completed',
        subscriptionId: payload.subscriptionId
      }
    })
  }

  bookingStep1(payload) {
    const STEP1_MUTATION = gql`
      mutation bookingStep1(
        $executionDate: DateTime!
        $pickUpLocationId: ID
        $activityId: ID!
        $ownerId: ID!
        $rate: Json!
        $kidsAmount: Int
        $adultsAmount: Int!
        $status: BookingState!
      ) {
        createReservation(
          executionDate: $executionDate,
          pickUpLocationId: $pickUpLocationId,
          activityId: $activityId
          ownerId: $ownerId
          rate: $rate
          kidsAmount: $kidsAmount
          adultsAmount: $adultsAmount
          status: $status
        ) {
          id
          executionDate
          kidsAmount
          adultsAmount
        }
      }

    `;

    return this.client.mutate({
      mutation: STEP1_MUTATION,
      variables: {
        executionDate: payload.executionDate,
        pickUpLocationId: payload.pickUpLocationId,
        activityId: payload.activityId,
        ownerId: payload.owner,
        rate: payload.rate,
        kidsAmount: payload.kidsAmount,
        adultsAmount: payload.adultsAmount,
        isComingAlone: checkIfComingAlone(payload),
        status: 'Details'
      }
    });

  }


  getValidSubscription(bookingDate) {
      return this.client.watchQuery({
        query: GET_VALID_SUBSCRIPTION,
        variables: {
          bookingDate: bookingDate
        }
      });
  }
}
