import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import Sprites from '../../../../constants/sprite';
import Colors from '../../../../constants/colors';
import ButtonA from '../../button/buttonA';
import ButtonC from '../../button/buttonC';
import SimpleCard from '../simpleCard';


export default class CardK extends Component {

  render(){
    var style = this.getStyle();

    return (
      <div style={style.wrapper}>

        <div className="row">
          <div className="col-md-5 col-sm-5">
            <div style={this.props.sprite}></div>
            <p style={style.slogan}>{this.props.slogan}</p>
          </div>
          <div className="col-md-7 col-sm-5">
            <div style={style.buttonWrapper}>
              {this.props.children}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-sm-12">
            <SimpleCard data={this.props.data} />
          </div>
        </div>

      </div>
    );
  }

  getStyle() {
    return {
      segurosIBKSpriteStyle: Sprites.Home.SegurosIBK,
      wrapper: {
        margin: '70px 0 0 32px'
      },
      rightBottomWrapperStyle: {
        marginTop: '30px'
      },
      descriptionStyle: {
        fontFamily: 'noto-sans-regular',
        fontSize: '16px',
        color: 'white'
      },
      boldStyle: {
        fontFamily: 'noto-sans-bold',
      },
      buttonWrapper: {
        marginTop: '45px'
      },
      slogan: {
        color: 'white',
        fontSize: '14px',
        fontWeight: '100',
        marginTop: '15px'
      }
    }
  }
}

CardK.propTypes = {
  data: React.PropTypes.object.isRequired,
  sprite: React.PropTypes.object.isRequired,
  slogan: React.PropTypes.string
}
