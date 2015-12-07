import React from 'react';

require("bootstrap-sass!./../../bootstrap-sass.config.js");

import Menu from './layout/menu';
import Powered from './layout/powered';
import Footer from './layout/footer';
import Intro from './layout/intro';
// import Banner from './sections/home/banner';
// import Service from './sections/home/service';
// import Entry from './sections/home/entry';
// import Cover from './sections/home/cover';
// import Products from './sections/home/products';

// *** Nosotros ***
import Banner from './sections/aboutus/banner';

export default function App() {

  return (
    <div>
      <Intro />
      <Menu />
      <Banner />
      <Footer />
      <Powered />
    </div>
  );
}
