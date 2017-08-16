import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

/*
{
"executionDate": "2017-07-20T05:00:00.000Z",
"executionTime": "",
"pickUpLocationId": "cj54k0273lnxk01843amzulx2",
"pickUpTime": "14:10",
"companionsIds": "",
"isComingAlone": "",
"kidsAmount": 1,
"adultsAmount": 1,
"activityId": "cj52y0wknh4sb01849quuqwtu",
"owner": "cj5wv1qg27bn10152zpagr55t",
"rate": {
"currency": "USD",
"discountPrice": 106,
"name": "BASIC"
}
}
 */

@Injectable()
export class BookingService {

  constructor(private client: Apollo) { }

  bookintStep1(payload) {
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
        kidsAmount: payload.kidsAmount + 1,
        adultsAmount: payload.adultsAmount,
        status: "Details"
      }
    });

  }
}
