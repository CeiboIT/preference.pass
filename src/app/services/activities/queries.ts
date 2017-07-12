import { Injectable } from '@angular/core';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class ActivitiesQueries {
  constructor(private client: Apollo) { }

  getAllActivities() {
    const GET_ACTIVITIES = gql`
        query {
            allActivities {
                id
                name
                area {
                    formatedAddress
                }
                shortDescription
                description
                communicationExplanation
                departureExplanation
                startsAt
                finishAt
                scheduleExplanation
                discount {
                    name
                    discountPrice
                    currency
                }
                mainPhoto
                subPhotos
                category {
                    name			
                }
            }
        }
      `
    return this.client.watchQuery({
      query: GET_ACTIVITIES
    })
  }
}