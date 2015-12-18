import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import {FontABold} from '../../../../constants/fonts';
import ButtonB from '../../button/buttonB';


export default class CardM extends Component {

  render(){
    var style = this.getStyle();

    return (
      <div>

        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <div style={style.sprite}></div>
          </div>
          <div className="col-md-3">
            <div style={style.buttonWrapper}>
              <ButtonB />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-offset-3 col-md-12 col-sm-12">
            <h1 style={style.title} dangerouslySetInnerHTML={this.sanitize(this.props.data.title)}></h1>
            {
              this.props.data.subtitle ?
              <h2 style={style.subtitle}>{this.props.data.subtitle}</h2> : null
            }
          </div>
        </div>

      </div>
    );
  }

  getStyle() {
    return {
      wrapper: {
        margin: '70px 0 0 32px'
      },
      title: _.merge({}, FontABold.getVariation('servicesB'), {
        paddingTop: '5px'
      }),
      subtitle: _.merge({}, FontABold.getVariation('headerA'), {
      }),
      buttonWrapper: {
        marginTop: '20px'
      },
      sprite: this.props.data.sprite
    }
  }

  sanitize(value) {
    return {
      __html: value
    };
  }
}

CardM.propTypes = {
  data: React.PropTypes.object.isRequired
};
