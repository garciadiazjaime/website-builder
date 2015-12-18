import React, { Component, PropTypes} from 'react';

import UtilRD from '../../../../utils/rd';
import Sprites from '../../../../constants/sprite';
import Colors from '../../../../constants/colors';
import Fonts from '../../../../constants/fonts';
import ButtonA from '../../button/buttonA';
import SimpleCard from '../simpleCard';


export default class CardX extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div>
        adios
      </div>
    );
  }
}

CardX.propTypes = {
  data: React.PropTypes.object.isRequired
};
