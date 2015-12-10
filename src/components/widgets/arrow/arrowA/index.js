import React, { Component, PropTypes} from 'react';
import _ from 'lodash';
import Fonts from '../../../../constants/fonts';


export default class ArrowA extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        wrapper: {
          display: 'inline-block'
        },
        arrow: _.merge({}, Fonts.typeE, {
          top: '22px',
        })
      }
    }
  }

  render(){

    return (<a style={this.state.style.wrapper}>
      <i className="glyphicon glyphicon-menu-right" style={this.state.style.arrow}></i>
    </a>);
  }
}
