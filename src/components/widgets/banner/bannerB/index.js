import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import UtilRD from '../../../../utils/rd';
import Sprites from '../../../../constants/sprite';
import Fonts from '../../../../constants/fonts';
import CardA from '../../card/cardA';
import CardB from '../../card/cardB';
import CardC from '../../card/cardC';
import SimpleCard from '../../card/simpleCard';
import Fleck from '../../misc/fleck';


export default class BannerB extends Component {


  render(){
    var style = this.getStyle();

    return (
      <div className="container">
        <div className="row" style={style.wrapper}>
          <SimpleCard data={this.props.data} />
          <Fleck />
          <div style={style.bannerLines}>
          </div>
        </div>
      </div>
    );
  }

  getStyle(type) {
    switch (type) {
      case 'TABLET':
        return {
          cardBTitle: _.merge({}, this.state.style.cardBTitle, {
            fontSize: '20px',
            marginTop: '30px'
          }),
          cardBWrapper: _.merge({}, this.state.style.cardBWrapper, {
            paddingRight: '40px'
          })
        };
      default:
        return {
          wrapper: {
            position: 'relative'
          },
          bannerLines: _.merge({}, Sprites.General.BannerLines, {
            position: 'absolute',
            top: '80px',
            right: '80px'
          })
        };
    }
  }
}
