// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  auth0: {
    clientID: 'i5q_2LeZ99i8-V83pm2cirIpCpmoH3J1',
    domain: 'preferencepassdevelopment.auth0.com',

  },
  api: {
    cardsEndpoint: 'https://dev.cards.preferencepass.xyz',
    codesEndpoint: 'https://dev.discounts.preferencepass.xyz',
    subscriptionsEndpoint: 'https://dev.payments.preferencepass.xyz/subscription'
  },
  stripe: {
    key: 'pk_test_GA3U6cAIbztMaLpOFX1YYUAG'
  },
  paypal: {
    env: 'sandbox'
  },
  graphCoolUri: 'https://api.graph.cool/simple/v1/cj41c9u2zddol0177la66g30g',
  mailing: {
    booking: 'https://dev.mailing.preferencepass.xyz/booking/'
  }
};