import React from 'react';
import ReactDOM from 'react-dom';
import  {ApolloClient, InMemoryCache}  from '@apollo/client';
import  {ApolloProvider}  from 'react-apollo';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm'
// const netWorkInterface = createNetworkInterface({
//   uri: '/graphql',
//   opts:{
//     credentials: 'same-origin'
//   }
// });

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  //dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    
      <ApolloProvider client={client}> 
      <BrowserRouter>
      <Header />
        <Routes>
          {/* <Route path="/" element={<Header />}/> */}
          <Route exact path="/login" element={<LoginForm/>}/>
          <Route  path="/signup" element={<SignupForm/>}/>

        </Routes>
      </BrowserRouter>  
      </ApolloProvider> 
      
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
