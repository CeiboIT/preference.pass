import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {Observable} from "rxjs/Observable";
import {isComingAlone} from "../utils/user";
function checkIfComingAlone(payload) {
  return (!payload.kidsAmount && !payload.adultsAmount);
}

const COMPLETE_BOOKING_WITH_COMPANIONS = gql`  
  mutation CompleteBookingWithCompanions(
  $reservationId: ID!,
  $subscriptionId: ID!,
  $status: BookingState,
  $companionsIds: [ID!]
  ) {
    updateReservation(
      id: $reservationId,
      status: $status,
      subscriptionId: $subscriptionId,
      companionsIds: $companionsIds
    ) {
      id
    }
  }
`;

const STEP1_MUTATION_WITH_PICKUP_LOCATIONS = gql`
  mutation bookingStep1WithPickupLocations(
  $executionDate: DateTime!
  $pickUpLocationId: ID
  $pickUpTime: String
  $activityId: ID!
  $ownerId: ID!
  $rate: Json!
  $kidsAmount: Int
  $adultsAmount: Int!
  $status: BookingState!
  $isComingAlone: Boolean
  ) {
    createReservation(
      executionDate: $executionDate,
      pickUpLocationId: $pickUpLocationId,
      pickUpTime: $pickUpTime,
      activityId: $activityId
      ownerId: $ownerId
      isComingAlone: $isComingAlone
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

const STEP1_MUTATION = gql`
  mutation bookingStep1(
  $executionDate: DateTime!
  $activityId: ID!
  $ownerId: ID!
  $rate: Json!
  $kidsAmount: Int
  $adultsAmount: Int!
  $status: BookingState!
  $isComingAlone: Boolean
  ) {
    createReservation(
      executionDate: $executionDate,
      activityId: $activityId
      ownerId: $ownerId
      rate: $rate
      kidsAmount: $kidsAmount
      adultsAmount: $adultsAmount
      status: $status
      isComingAlone: $isComingAlone
    ) {
      id
      executionDate
      kidsAmount
      adultsAmount
    }
  }
`;

const COMPLETE_BOOKING = gql`

  mutation CompleteBooking(
  $reservationId: ID!,
  $subscriptionId: ID!,
  $status: BookingState,
  $companionsIds: [ID!]
  ) {
    updateReservation(
      id: $reservationId,
      status: $status,
      subscriptionId: $subscriptionId,
      companionsIds: $companionsIds
    ) {
      id
    }
  }

`;

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
    if (payload.companionsIds) {
      return this.client.mutate({
        mutation: COMPLETE_BOOKING_WITH_COMPANIONS,
        variables: {
          reservationId: payload.id,
          companionsIds: payload.companionsIds,
          status: 'Completed',
          subscriptionId: payload.subscriptionId
        }
      });
    } else {
      return this.client.mutate({
        mutation: COMPLETE_BOOKING,
        variables: {
          reservationId: payload.id,
          status: 'Completed',
          subscriptionId: payload.subscriptionId
        }
      });
    }
  }

  bookingStep1(payload) {

      if (payload.pickUpLocationId) {
        return this.client.mutate({
          mutation: STEP1_MUTATION_WITH_PICKUP_LOCATIONS,
          variables: {
            executionDate: payload.executionDate,
            pickUpLocationId: payload.pickUpLocationId,
            pickUpTime: payload.pickUpTime,
            activityId: payload.activityId,
            ownerId: payload.owner,
            rate: payload.rate,
            kidsAmount: payload.kidsAmount,
            adultsAmount: payload.adultsAmount,
            isComingAlone: checkIfComingAlone(payload),
            status: 'Details'
          }
        });
      } else {
        return this.client.mutate({
          mutation: STEP1_MUTATION,
          variables: {
            executionDate: payload.executionDate,
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
