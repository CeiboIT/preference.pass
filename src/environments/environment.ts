// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api: {
    cardsEndpoint: 'https://cards-preferencepass-jezvkohbrj.now.sh',
    codesEndpoint: 'https://discounts-preferencepass-eyrbkgfhmb.now.sh',
    subscriptionsEndpoint: 'https://payments-preferencepass-lhruvvgpfu.now.sh/subscription'
  },
  stripe: {
    key: 'pk_test_GA3U6cAIbztMaLpOFX1YYUAG'
  }
};