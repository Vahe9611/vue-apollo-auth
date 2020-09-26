import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

Vue.use(VueApollo);

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: 'http://vuejs.frontend.hr.markeaze.com/graphql',
});

// Cache implementation
const cache = new InMemoryCache();

export default () => {
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
  });

  // Create vue apollo provider
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    errorHandler(error) {
      // eslint-disable-next-line no-console
      console.log(
        '%cError',
        'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',
        error.message,
      );
    },
  });

  return apolloProvider;
};
