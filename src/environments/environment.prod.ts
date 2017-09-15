export const environment = {
  production: true,
  auth0: {
    clientID: 'jVoLk0OP2e3ZNo91EJssEDxOEGAM3ukO',
    domain: 'preferencepass.auth0.com'
  },
  api: {
    cardsEndpoint: 'https://cards.preferencepass.xyz',
    codesEndpoint: 'https://discounts.preferencepass.xyz',
    subscriptionsEndpoint: 'https://payments.preferencepass.xyz/subscription'
  },
  stripe: {
    key: 'pk_live_C2c0qwzBn3R75h56uVXpIk0s'
  },
  paypal: {
    env: 'production'
  },
  graphCoolUri: 'https://api.graph.cool/simple/v1/cj76588cy10aq0133eli0nu97',
  mailing: {
    booking: 'https://mailing.preferencepass.xyz/booking/'
  }
};