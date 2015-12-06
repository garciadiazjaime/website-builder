import React, { Component, PropTypes} from 'react';
import Sprites from '../../sprites/sprite.js';

export default class Logo extends Component {

  render(){
    var style = !this.props ? Sprites.General.Logo : Sprites.General.LogoAnti;
    return (
      <div>
        <div style={style} className="img-responsive"></div>
      </div>
    );
  }
}
