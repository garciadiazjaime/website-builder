import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import {FontABold} from '../../../../constants/fonts';
import Colors from '../../../../constants/colors';
import ButtonE from '../../button/buttonE';


export default class CardN extends Component {

  render(){
    var style = this.getStyle();

    return (
      <div style={style.wrapper}>
        <div className="row">

          <div className="col-md-1">
            <div style={style.bulletSprite}></div>
          </div>

          <div className="col-md-11">
            <div className="row" style={style.border}>

                <div className="col-md-10">
                  <div className="row">
                    <a style={style.title} dangerouslySetInnerHTML={this.sanitize(this.props.data.title)}></a>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="pull-right">
                    <ButtonE />
                  </div>
                </div>

            </div>
          </div>

        </div>
      </div>
    );
  }

  getStyle() {
    return {
      wrapper: {
        minHeight: '33px',
        paddingTop: '15px'
      },
      title: _.merge({}, FontABold.getVariation('servicesC'), {
        paddingTop: '5px'
      }),
      border: {
        borderBottom: '1px solid ' + Colors.grayDark,
        paddingBottom: '12px'
      },
      bulletSprite: _.merge({}, this.props.data.sprite, {
        marginTop: '5px',
        marginLeft: '2px'
      })
    };
  }

  sanitize(value) {
    return {
      __html: value
    };
  }
}

CardN.propTypes = {
  data: React.PropTypes.object.isRequired
}
