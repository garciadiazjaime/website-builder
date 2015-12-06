import React, { Component, PropTypes} from 'react';
import _ from 'lodash';
import Colors from '../../constants/colors';
import Sprites from '../../constants/sprite';


var fontStyle = {
  fontFamily: 'noto-sans-bold',
  fontSize: '12px',
};

var wrapperStyle = _.merge(fontStyle, {
  display: 'inline-block',
  textAlign: 'center'
});

var textStyle = {
  color: 'white',
  display: 'inline-block',
  marginTop: '10px'
};

var iconStyle = {
  top: '2px',
  fontSize: '12px',
  fontWeight: 'bold'
};

export default class ButtonC extends Component {

  render(){
    var imageStyle = this.getImageStyle(this.props.type);
    return (<a style={wrapperStyle} className="btnHover">
          <i style={imageStyle}></i>
          <br />
          <span style={textStyle}>{this.props.text}</span>
        </a>);
  }

  getImageStyle(type) {
    var response;
    switch (type) {
      case 'AUTOS':
          response = Sprites.Seguros.SegurosCarros;
      break;
      case 'MOTOS':
          response = Sprites.Seguros.SegurosMotos;
      break;
      case 'CASA':
          response = Sprites.Seguros.SegurosCasas;
      break;
      case 'EMPRESAS':
          response = Sprites.Seguros.SegurosEmpresas;
      break;
      case 'PERSONAS':
          response = Sprites.Seguros.SegurosPersonas;
      break;
      default:
        response = Sprites.Seguros.SegurosCarros;

    }
    return _.merge({}, response, {
      display: 'inline-block'
    });
  }
}
