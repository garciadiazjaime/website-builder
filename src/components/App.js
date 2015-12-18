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
import BigPleck from './sections/aboutus/bigPleck';
import WhyIB from './sections/aboutus/WhyIB';
import OurTeam from './sections/aboutus/ourTeam';
import TeamMembers from './sections/aboutus/teamMembers';
import OurServices from './sections/aboutus/ourServices';

export default function App() {

  return (
    <div>
      <Menu />
      <Intro />
      <BigPleck />
      <WhyIB />
      <OurTeam />
      <TeamMembers />
      <OurServices />
      <Footer />
      <Powered />
    </div>
  );
}
