import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri : 'https://api.graph.cool/simple/v1/cj41c9u2zddol0177la66g30g'
});

export function provideClient(): ApolloClient {
  return new ApolloClient( {
    networkInterface : networkInterface
  });
}
