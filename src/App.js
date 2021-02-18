import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './styles/global';
import Pages from './pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Pages/>
      <Footer />
    </>
  );
}

export default App;
