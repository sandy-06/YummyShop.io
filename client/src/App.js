import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

import StoreContainer from './Components/StoreContainer'

import Landing from './Components/pages/Homepage';
import Login from './Components/Login';
import Cart from './pages/Cart';
import Footer from './Components/Footer';
import NavTabs from './Components/NavTabs';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <NavTabs />
        <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Cart' element={<Cart/>} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Routes>
        </Router>
    </ApolloProvider>
  );
}

export default App;
