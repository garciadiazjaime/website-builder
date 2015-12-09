import React, { Component, PropTypes} from 'react';
import Sprites from '../../constants/sprite';

export default class Logo extends Component {

  render(){
    var spriteStyle = this.getSprite(this.props.type);
    return (
      <div>
        <div style={spriteStyle} className="img-responsive"></div>
      </div>
    );
  }

  getSprite(type) {
    switch (type) {
      case 'ANTI':
        return Sprites.General.LogoAnti;
      default:
        return Sprites.General.Logo;
    }
  }
}
