import React, { Component, PropTypes} from 'react';

import Colors from '../../../constants/colors';
import Sprites from '../../../constants/sprite';

import YellowFleck from '../../widgets/YellowFleck';

import Banner from '../aboutus/banner';
import Mission from '../aboutus/mission';

export default class BigPleck extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        pleckContainer: {
          backgroundImage: "url('http://127.0.0.1:3000/images/aboutus_bigPleck.png')",
          backgroundPosition: window.innerWidth*.55 + 'px top',
          backgroundRepeat: 'no-repeat'
        }
      }
    };
  }


  render(){
    return (
        <div style={this.state.style.pleckContainer}>
          <Banner />
          <Mission />
        </div>
    );
  }
}
