import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './styles/global';
import Pages from './pages';
import Message from './components/message/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Message/>
      <Pages/>
      <Footer />
    </>
  );
}

export default App;
