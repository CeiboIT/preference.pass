import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri : 'https://api.graph.cool/simple/v1/cj41c9u2zddol0177la66g30g'
});

networkInterface.use([{
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }
    // get the authentication token from local storage if it exists
    if (localStorage.getItem('auth0IdToken')) {
      req.options.headers.authorization = `Bearer ${localStorage.getItem('auth0IdToken')}`;
    }
    next();
  },
}]);

export function provideClient(): ApolloClient {
  return new ApolloClient( {
    networkInterface : networkInterface
  });
}
