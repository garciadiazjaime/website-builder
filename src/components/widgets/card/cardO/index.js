import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import {FontA, FontABold} from '../../../../constants/fonts';
import ButtonB from '../../button/buttonB';


export default class CardO extends Component {

  render(){
    var style = this.getStyle();

    return (
      <div className="col-md-3" style={style.wrapperSprite}>
        <span style={style.sprite}></span>
        <h1 style={style.title} dangerouslySetInnerHTML={this.sanitize(this.props.data.title)}></h1>
        <div style={style.buttonWrapper}>
          <ButtonB />
        </div>
        <p style={style.description} dangerouslySetInnerHTML={this.sanitize(this.props.data.description)}></p>
      </div>
    );
  }

  getStyle() {
    return {
      wrapperSprite: {
        textAlign: 'center'
      },
      sprite: _.merge({}, this.props.data.sprite, {
        display: 'inline-block'
      }),
      title: _.merge({}, FontABold.getVariation('servicesE'), {
      }),
      description: _.merge({}, FontA.getVariation('servicesA'), {
      }),
      buttonWrapper: {
        marginTop: '20px',
        marginBottom: '20px'
      }
    };
  }

  sanitize(value) {
    return {
      __html: value
    };
  }
}

CardO.propTypes = {
  data: React.PropTypes.object.isRequired
}
