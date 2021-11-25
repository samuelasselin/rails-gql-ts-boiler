import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../front-end-react/components/App';

const client = new ApolloClient<NormalizedCacheObject>({
  cache: new InMemoryCache(),
  uri: '/graphql',
});

const BoilerPLate: React.FunctionComponent = () => (
  // @ts-ignore
  // eslint-disable-next-line react/no-children-prop
  <ApolloProvider client={client} children={null}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BoilerPLate />,
    document.body.appendChild(document.createElement('div')),
  );
});
