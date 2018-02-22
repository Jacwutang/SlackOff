import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Introduction from './introduction/Introduction';

export default () => {
  return(
    <div className="container">
      <Header />
      <Introduction />
      <Footer />
    </div>
  );
};
