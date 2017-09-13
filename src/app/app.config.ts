import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { environment } from "../environments/environment";

const networkInterface = createNetworkInterface({
  uri : environment.graphCoolUri
});

networkInterface.use([{
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }
    // get the authentication token from local storage if it exists
    if (localStorage.getItem('idToken')) {
      req.options.headers.authorization = `Bearer ${localStorage.getItem('idToken')}`;
    }
    next();
  },
}]);

export function provideClient(): ApolloClient {
  return new ApolloClient( {
    networkInterface : networkInterface
  });
}
