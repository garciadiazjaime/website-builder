import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import {FontABold} from '../../../../constants/fonts';
import Sprites from '../../../../constants/sprite';
import Colors from '../../../../constants/colors';
import ButtonA from '../../button/buttonA';
import ButtonC from '../../button/buttonC';
import SimpleCard from '../simpleCard';


export default class CardL extends Component {

  render(){
    var style = this.getStyle();
    var iconEl = this.getIcon(this.props.type, style.sprite);
    var title = this.getTitle(this.props.type, this.props.title, style);

    return (
      <div style={style.wrapper}>
        {iconEl}
        {title}
      </div>
    );
  }

  getIcon(type, sprite) {
    switch (type.toUpperCase()) {
      case 'TITLE':
        return (<div style={sprite} className="pull-left"></div>);
      default:
        return null;
    }
  }

  getTitle(type, title, style) {
    switch (type.toUpperCase()) {
      case 'TITLE':
        return (<h1 style={style.title}>{title}</h1>);
      case 'SUBTITLE':
        return (<h2 style={style.subtitle}>{title}</h2>);
      default:
        return null;
    }
  }

  getStyle() {
    return {
      wrapper: {
        marginTop: '150px'
      },
      title: _.merge(FontABold.getVariation('servicesA'), {
        borderBottom: '5px solid',
        paddingBottom: '10px',
        paddingTop: '14px',
        marginLeft: '25px',
        paddingLeft: '120px'
      }),
      subtitle: _.merge(FontABold.getVariation('servicesA'), {
        borderBottom: '5px solid',
        paddingBottom: '10px',
        paddingTop: '14px',
        marginLeft: '140px'
      }),
      sprite: this.props.sprite ? this.props.sprite : null
    }
  }
}

CardL.propTypes = {
  title: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  sprite: React.PropTypes.object
};
