import React from 'react';

require("bootstrap-sass!./../../bootstrap-sass.config.js");

import Menu from './layout/menu';
import Intro from './layout/intro';

// ---- HOME
import BannerA from './widgets/banner/bannerA';
import Service from './sections/home/service';
import Entry from './sections/home/entry';
import Cover from './sections/home/cover';
import Products from './sections/home/products';

// <BannerA />
// <Service />
// <Entry />
// <Cover />
// <Products />

// ---- SERVICES
import Services from './sections/services';
import servicesData from '../lib/services';

import Footer from './layout/footer';
import Powered from './layout/powered';

export default function App() {

  return (
    <div>
      <Menu />
      <Intro />

      <Services data={servicesData} />

      <Footer />
      <Powered />
    </div>
  );
}
