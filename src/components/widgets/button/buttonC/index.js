import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import {FontABold} from '../../../../constants/fonts';


export default class ButtonC extends Component {

  render(){
    var style = this.getStyle();

    return (<a style={style.wrapper} className="btnHover">
          <div style={this.props.sprite}></div>
          <br />
          <span style={style.title}>{this.props.text}</span>
        </a>);
  }

  getStyle() {
    return {
      wrapper: _.merge({}, FontABold.getVariation('buttonC'), {
        display: 'inline-block',
        textAlign: 'center'
      }),
      title: {
        display: 'inline-block',
        marginTop: '10px'
      }
    }
  }
}

ButtonC.propTypes = {
  sprite: React.PropTypes.object.isRequired
};
