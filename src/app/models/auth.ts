export interface UserAuth {
  email: String;
}

export interface AuthWithEmail {
  email: String;
  password: String;
}

export interface Auth0User {
  email_verified: Boolean;
  email: String;
  name: String;
  nickname: String;
  user_id: String;
  picture: String;
}

/* response example
 *
 *
 * {
 "email_verified": false,
 "email": "epotignano@gmail.com",
 "clientID": "i5q_2LeZ99i8-V83pm2cirIpCpmoH3J1",
 "updated_at": "2017-06-26T03:32:27.901Z",
 "name": "epotignano@gmail.com",
 "picture": "https://s.gravatar.com/avatar/6198cb3a86233b719d0b0ec6ea9afd62?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fep.png",
 "user_id": "auth0|5950804affeb1067ad5a2ca0",
 "nickname": "epotignano",
 "identities": [
 {
 "user_id": "5950804affeb1067ad5a2ca0",
 "provider": "auth0",
 "connection": "Username-Password-Authentication",
 "isSocial": false
 }
 ],
 "created_at": "2017-06-26T03:32:26.368Z",
 "global_client_id": "aqnXPeZJOfVToT78r8GOBEL9UlyQmXQB"
 }
 *
 *
 *
 * */
