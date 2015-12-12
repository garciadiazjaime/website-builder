import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import UtilRD from '../../../../utils/rd';
import Sprites from '../../../../constants/sprite';
import ButtonB from '../../button/buttonB';
import SimpleCard from '../../card/simpleCard';


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

    return (
      <div style={style.wrapper}>
        <SimpleCard data={this.props.data} />
        <p style={style.buttonContainer}>
          <ButtonB />
        </p>
      </div>
    );
  }

  getStyle(type) {
    switch (type) {
      case 'INIT':
        return {
          wrapper: _.merge({}, Sprites.Home.NuevoEntrante, {
            padding: '90px 0 0 250px',
            marginLeft: '-22px'
          })
        };
      case 'TABLET':
        return {
          wrapper: _.merge({}, this.state.style.wrapper, {
            marginLeft: '0',
            width: '100%'
          })
        };
      default:
        return {
          wrapper: this.state.style.wrapper,
          buttonContainer: {
            marginTop: '22px'
          }
        };
    }
  }
}
