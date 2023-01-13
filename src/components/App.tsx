import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import Popup from './UI/Popup/Popup';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <Popup />
    </div>
  );
}

export default App;
