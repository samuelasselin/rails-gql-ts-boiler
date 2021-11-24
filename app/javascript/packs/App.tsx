import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import ReactDOM from 'react-dom';
import { AppBody } from '../front-end-react/components/AppBody';

const client = new ApolloClient<NormalizedCacheObject>({
  cache: new InMemoryCache(),
  uri: '/graphql',
});

const BoilerPLate: React.FunctionComponent = () => (
  // @ts-ignore
  // eslint-disable-next-line react/no-children-prop
  <ApolloProvider client={client} children={null}>
    <AppBody />
  </ApolloProvider>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BoilerPLate />,
    document.body.appendChild(document.createElement('div')),
  );
});
