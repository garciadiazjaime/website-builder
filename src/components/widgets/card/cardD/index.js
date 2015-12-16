import React, { Component, PropTypes} from 'react';

import UtilRD from '../../../../utils/rd';
import Sprites from '../../../../constants/sprite';
import Colors from '../../../../constants/colors';
import Fonts from '../../../../constants/fonts';
import ButtonA from '../../button/buttonA';
import SimpleCard from '../simpleCard';


export default class CarD extends Component {

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
      <div style={style.leftWrapperStyle}>
        <h2 style={style.titleStyle}>
          Servicio <br />Integral <span style={style.textRed}>360</span>
        </h2>
        <SimpleCard data={this.props.data} />
        {this.props.children}
      </div>
    );
  }

  getStyle(type) {
    switch (type) {
      case 'INIT':
        return {
          leftWrapperStyle: {
            paddingLeft: '35px',
            paddingTop: '130px'
          }
        };
        break;
      case 'TABLET':
        return {
          leftWrapperStyle: _.merge({}, this.state.style.leftWrapperStyle, {
            paddingLeft: '25px',
            paddingTop: '70px',
          })
        };
      case 'PHONE':
        return {
          leftWrapperStyle: _.merge({}, this.state.style.leftWrapperStyle, {
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
          leftWrapperStyle: this.state.style.leftWrapperStyle
        };
    }
  }
}

CarD.propTypes = {
  data: React.PropTypes.object.isRequired
};
