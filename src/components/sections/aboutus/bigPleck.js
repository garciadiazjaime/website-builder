import React, { Component, PropTypes} from 'react';

import Colors from '../../../constants/colors';
import Sprites from '../../../constants/sprite';
import URLs from '../../../constants/urls';
import YellowFleck from '../../widgets/YellowFleck';

import Banner from './banner';
import Abstract from './abstract';
import Mission from './mission';

export default class BigPleck extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        pleckContainer: {
          backgroundImage: "url('" + URLs.IMAGES + "aboutus_bigPleck.png')",
          backgroundPosition: window.innerWidth*.55 + 'px top',
          backgroundRepeat: 'no-repeat',
          marginBottom: '20px'
        }
      }
    };
  }


  render(){
    return (
        <div style={this.state.style.pleckContainer}>
          <Banner />
          <Abstract />
          <Mission />
        </div>
    );
  }
}
