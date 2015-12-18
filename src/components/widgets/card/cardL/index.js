import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import {FontABold} from '../../../../constants/fonts';


export default class CardL extends Component {

  render(){
    var style = this.getStyle();
    var iconEl = this.getIcon(this.props.data, style.sprite);
    var title = this.getTitle(this.props.data, style);

    return (
      <div style={style.wrapper}>
        {iconEl}
        {title}
      </div>
    );
  }

  getIcon(data, sprite) {
    switch (data.type.toUpperCase()) {
      case 'TITLE':
        return (<div style={sprite} className="pull-left"></div>);
      default:
        return null;
    }
  }

  getTitle(data, style) {
    switch (data.type.toUpperCase()) {
      case 'TITLE':
        return (<h1 style={style.title}>{data.title}</h1>);
      case 'SUBTITLE':
        return (<h2 style={style.subtitle}>{data.title}</h2>);
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
        paddingLeft: '120px',
        marginLeft: '25px'
      }),
      subtitle: _.merge(FontABold.getVariation('servicesA'), {
        borderBottom: '5px solid',
        paddingBottom: '10px',
        paddingTop: '14px',
        marginLeft: '140px'
      }),
      sprite: this.props.data.sprite ? this.props.data.sprite : null
    }
  }
}

CardL.propTypes = {
  data: React.PropTypes.object.isRequired
};
