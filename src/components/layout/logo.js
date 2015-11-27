import React, { Component, PropTypes} from 'react';
import Sprites from '../../sprites/sprite.js';

export default class Logo extends Component {

  render(){

    return (
      <div>
        <div style={Sprites.General.Logo} className="img-responsive"></div>
      </div>
    );
  }
}
