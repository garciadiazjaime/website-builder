import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import UtilRD from '../../../../utils/rd';
import {FontABold} from '../../../../constants/fonts';
import SimpleCard from '../simpleCard';


export default class Entry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: this.getStyle('INIT')
    };
  }

  componentDidMount() {
    const utilRD = new UtilRD();

    if (utilRD.isTablet(document.body.clientWidth)) {
      this.setState({
        style: _.merge({}, this.state.style, this.getStyle('TABLET'))
      });
    }
  }

  render() {
    var style = this.getStyle();
    var card = this.getCard();

    return (
      <div style={style.wrapper}>
        <SimpleCard data={card} />
        {this.props.children}
      </div>
    );
  }

  getCard() {
    return {
      elements:[ _.merge({}, this.props.data.elements[0], {
        style: this.state.style.title
      })]
    };
  }

  getStyle(type) {
    switch (type) {
      case 'INIT':
        return {
          title: _.merge({}, FontABold.getVariation('homeA'), {
            marginTop: '70px',
            marginBottom: '50px'
          })
        };
      case 'TABLET':
        return {
          title: _.merge({}, this.state.style.title, {
            fontSize: '25px'
          })
        };
      default:
        return {
          wrapper: {
            paddingLeft: '35px'
          },
          title: this.state.style.title
        };
    }
  }
}
