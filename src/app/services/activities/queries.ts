import { Injectable } from '@angular/core';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import gql from 'graphql-tag';
const GET_FIRST_ACTIVITIES_BY_CATEGORY = gql`  
  query($categoryName: String, $published: Boolean, $firsts: Int! ) {
    allActivities(filter: {
      category: { name: $categoryName}
      published: $published
    }, first: $firsts) {
      id
      name
      headline
      area {
        formatedAddress
      }
      startsAt
      finishAt
      rates {
        id
        name
        discountPrice
        originalPrice
        currency
      }
      mainPhoto
      category {
        name
      }
    }
  }
  
`;

const GET_HOT_DEALS = gql`
  query {
    allHotDeals {
      id
      mainPhoto
      activity {
        id
        name
        mainPhoto
        headline
        rates {
          id
          name
          discountPrice
          originalPrice
          currency
        }
      }
    }
  }
`;

const GET_FIRTS_HOTDEALS = gql`
  query($first: Int!) {
    allHotDeals(first: $first) {
      id
      mainPhoto
      activity {
        id
        name
        mainPhoto
        headline
        rates {
          id
          name
          discountPrice
          originalPrice
          currency
        }
      }
    }
  }
`
const GET_ACTIVITY_BY_CATEGORY = gql`
  query($categoryName: String, $published: Boolean ) {
    allActivities(filter: {
      category: { name: $categoryName}
      published: $published
    }) {
      id
      name
      headline
      area {
        formatedAddress
      }
      startsAt
      finishAt
      rates {
        id
        name
        discountPrice
        originalPrice
        currency
      }
      mainPhoto
      category {
        name
      }
    }
  }
`

@Injectable()
export class ActivitiesQueries {
  constructor(private client: Apollo) { }

  getAllActivities() {
    const GET_ACTIVITIES = gql`
        query {
            allActivities {
                id
                name
               headline
                area {
                    formatedAddress
                }
                startsAt
                finishAt
                rates {
                    id
                    name
                    discountPrice
                    originalPrice
                    currency
                }
                mainPhoto
                category {
                    name			
                }
            }
        }
      `;
    return this.client.watchQuery({
      query: GET_ACTIVITIES
    });
  }

  getHotDeals() {
    const GET_HOT_DEALS = gql`
      query {
        allHotDeals {
          id
          mainPhoto
          activity {
            id
            name
            mainPhoto
            headline
            rates {
              id
              name
              discountPrice
              originalPrice
              currency
            }
          }
        }
      }
    `;

    return this.client.watchQuery({
      query: GET_HOT_DEALS
    });
  }

  getActivitiesByCategory(categoryName, firsts?) {
    if (!!firsts) {
      return this.client.watchQuery({
        query: GET_FIRST_ACTIVITIES_BY_CATEGORY,
        variables: { categoryName: categoryName, published: true, firsts: firsts },
        fetchPolicy: 'network-only'
      });
    } else {
      return this.client.watchQuery({
        query: GET_ACTIVITY_BY_CATEGORY,
        variables: { categoryName: categoryName, published: true },
        fetchPolicy: 'network-only'
      });
    }
  }

  getActivityDepartures(id) {
    const GET_ACTIVITY_DEPARTURES = gql`      
      query($id: ID!) {
        allPickUpLocations(filter: {
          AND: [
            {
              activities_some: { id: $id},
              departures_some: {
                activities_some: { id: $id}
              }
            }
          ]
        }) {
          id
          name
          mainPhoto
          lng
          lat
          formattedAddress
          departures {
            times
          }
        }
      }
    `;

    return this.client.watchQuery({
      query: GET_ACTIVITY_DEPARTURES,
      variables: { id: id },
      fetchPolicy: 'network-only'
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
                  id
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
                  id
                  name
                  originalPrice
                  discountPrice
                  discountType
                  currency
                  amenitiesDescription
                }
                mainPhoto
                subPhotos
                coverPhoto
                category {
                    name			
                }
                lat
                lng
            }
        }
      `;
    return this.client.watchQuery({
      query: GET_ACTIVITY,
      variables: { id: id },
      fetchPolicy: 'network-only'
    });
  }
}
