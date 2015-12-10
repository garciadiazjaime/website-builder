import React, { Component, PropTypes} from 'react';

import Colors from '../../../constants/colors';
import Fonts from '../../../constants/fonts';

export default class Carousel extends Component {

  constructor(props) {
    super(props);
  }


  render(){
    return (
      <li data-target={this.props.data.cid} data-slide-to={this.props.data.number} className="active"></li>
    );
  }
}

