import React from 'react';

require("bootstrap-sass!./../../bootstrap-sass.config.js");

import Menu from './layout/menu';
import Intro from './layout/intro';
import Banner from './sections/home/banner';
import Service from './sections/home/service';
import Entry from './sections/home/entry';
import Cover from './sections/home/cover';
import Products from './sections/home/products';
import Footer from './layout/footer/';
import Powered from './layout/powered';

export default function App() {

  return (
    <div>
      <Menu />
      <Intro />
      <Banner />
      <Service />
      <Entry />
      <Cover />
      <Products />
      <Footer />
      <Powered />
    </div>
  );
}
