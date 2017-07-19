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
                startsAt
                finishAt
                rates {
                    name
                    discountPrice
                    currency
                }
                mainPhoto
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

  getActivitiesByCategory(categoryName) {
    const GET_ACTIVITY_BY_CATEGORY = gql`
      query($categoryName: String) {
        allActivities(filter: {
          category: { name: $categoryName}
        }) {
          id
          name
          area {
            formatedAddress
          }
          shortDescription
          startsAt
          finishAt
          rates {
            name
            discountPrice
            currency
          }
          mainPhoto
          category {
            name
          }
        }
      }
    `
    return this.client.watchQuery({
      query: GET_ACTIVITY_BY_CATEGORY,
      variables: { categoryName: categoryName }
    })
  }

  getActivityDepartures(id) {
    const GET_ACTIVITY_DEPARTURES = gql`      
      query($id: ID!) {
        Activity(id: $id) {
          id
          name
          departures {
            times
            pickUpLocations {
              name
              mainPhoto
              formattedAddress
            }
          }
        }
      }
    `;

    return this.client.watchQuery({
      query: GET_ACTIVITY_DEPARTURES,
      variables: { id: id }
    });
  }

  getActivityByID(id) {
       const GET_ACTIVITY = gql`
        query($id: ID!) {
            Activity(id: $id) {
                id
                name
                area {
                    formatedAddress
                }
                rates {
                  name
                  originalPrice
                  discountPrice
                }
                shortDescription
                description
                communicationExplanation
                departureExplanation
                startsAt
                finishAt
                scheduleExplanation
                rates {
                  name
                  originalPrice
                  discountPrice
                  discountType
                  currency
                  amenitiesDescription
                }
                mainPhoto
                subPhotos
                category {
                    name			
                }
                lat
                lng
            }
        }
      `
    return this.client.watchQuery({
      query: GET_ACTIVITY,
      variables: { id: id }
    });
  }
}
