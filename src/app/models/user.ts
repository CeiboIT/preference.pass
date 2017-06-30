export interface User {
  email: string;
  firstName: string;
  lastName: string;
  picture: string;
  birthDate: number;
}

/*
type User implements Node {
  createdAt: DateTime!
  id: ID! @isUnique
  updatedAt: DateTime!
  subscription: Subscription @relation(name: "SubscriptionOnUser")
  email: String!
  firstName: String!
  lastName: String!
  birthDate: Int!
  picture: String!
  companions: Companion! @relation(name: "CompanionOnUser")
  reservations: [Reservation!]! @relation(name: "UserOnReservation")
}
  */
