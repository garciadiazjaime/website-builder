import React, { Component, PropTypes} from 'react';

import UtilRD from '../../../../utils/rd';
import Sprites from '../../../../constants/sprite';
import Colors from '../../../../constants/colors';
import Fonts from '../../../../constants/fonts';
import ButtonA from '../../button/buttonA';
import SimpleCard from '../simpleCard';


export default class CardX extends Component {

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
    else if (utilRD.isPhone(document.body.clientWidth)) {
      this.setState({
        style: _.merge({}, this.state.style, this.getStyle('PHONE'))
      });
    }
  }

  render() {
    var style = this.getStyle();

    return (
      <div style={style.wrapperStyle}>
        <SimpleCard data={this.props.data} />
      </div>
    );
  }

  getStyle(type) {
    switch (type) {
      case 'INIT':
        return {
          wrapperStyle: {
            background: 'white',
            margin: '0 -11px'
          }
        };
        break;
      case 'TABLET':
        return {
          wrapperStyle: _.merge({}, this.state.style.wrapperStyle, {
            paddingLeft: '25px',
            paddingTop: '70px',
          })
        };
      case 'PHONE':
        return {
          wrapperStyle: _.merge({}, this.state.style.wrapperStyle, {
            paddingTop: '25px'
          })
        };
      default:
        return {
          titleStyle: {
            fontFamily: 'noto-sans-bold',
            fontSize: '40px',
            color: Colors.blueDark,
            marginBottom: '50px'
          },
          textRed: {
            color: Colors.red
          },
          wrapperStyle: {
            background: 'white',
            margin: '0 -11px'
          }
        };
    }
  }
}

CardX.propTypes = {
  data: React.PropTypes.object.isRequired
};
