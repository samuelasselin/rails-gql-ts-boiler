import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom';

const client = new ApolloClient({ uri: 'localhost:3000' });

const ServicesApp = () => (
  <ApolloProvider client={client}>
    <h1>Welcome to rails-react boilerplate</h1>
  </ApolloProvider>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ServicesApp name="React" />,
    document.body.appendChild(document.createElement('div')),
  );
});
