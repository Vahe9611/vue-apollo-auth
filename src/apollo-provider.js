import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

Vue.use(VueApollo);

const httpLink = createHttpLink({
  uri: 'http://vuejs.frontend.hr.markeaze.com/graphql',
});

const authLink = setContext((_, { headers, ...context }) => {
  const token = localStorage.getItem('apollo-token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
    ...context,
  };
});

export default () => {
  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

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
