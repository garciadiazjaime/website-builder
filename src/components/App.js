import React from 'react';

require("bootstrap-sass!./../../bootstrap-sass.config.js");

import Menu from './layout/menu';
import Intro from './layout/intro';
import BannerA from './widgets/banner/bannerA';
import Service from './sections/home/service';
import Entry from './sections/home/entry';
import Cover from './sections/home/cover';
import Products from './sections/home/products';
import Footer from './layout/footer';
import Powered from './layout/powered';

export default function App() {

  return (
    <div>
      <Menu />
      <Intro />
      <BannerA />
      <Service />
      <Entry />
      <Cover />
      <Products />
      <Footer />
      <Powered />
    </div>
  );
}
