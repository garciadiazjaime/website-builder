import React, { Component, PropTypes} from 'react';

import UtilRD from '../../../utils/rd';
import Sprites from '../../../constants/sprite';
import Colors from '../../../constants/colors';
import Fonts from '../../../constants/fonts';
import ButtonA from '../../widgets/buttonA';


export default class Service extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: this.getStyle('INIT')
    };
  }

  componentDidMount(){
    const utilRD = new UtilRD();

    if (utilRD.isTablet(document.body.clientWidth)) {
      this.setState({
        style: _.merge({}, this.state.style, this.getStyle('TABLET'))
      });
    }
    else if (utilRD.isPhone(document.body.clientWidth)) {
      this.setState({
        style: _.merge({}, this.state.style, this.getStyle('TABLET'))
      });
    }
  }

  render(){
    var style = this.getStyle();

    return (
      <div className="container" style={style.containerStyle}>
        <div className="row">
          <div className="col-md-6 col-sm-5 col-xs-11">
            <div style={style.leftWrapperStyle}>
              <h2 style={style.titleStyle}>
                Servicio <br />Integral <span style={style.textRed}>360</span>
              </h2>
              <h3 style={style.introStyle}>Te ayudamos a llegar más lejos.</h3>
              <p style={style.descriptionStyle}>
                Entendemos tus necesidades, para ofrecerte <br /> una solución integral.
              </p>
              <ButtonA text="NUESTROS SERVICIOS" type='A' />
            </div>
          </div>
          <div className="col-md-6 col-sm-7 col-xs-12 hidden-xs">
            <div className="row">
              <div style={style.camionServicios}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getStyle(type) {
    switch (type) {
      case 'INIT':
        return {
          camionServicios: Sprites.Home.CamionServicios,
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
          }),
          camionServicios: _.merge({}, this.state.style.camionServicios, {
            width: '100%'
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
          camionServicios: this.state.style.camionServicios,
          containerStyle: {
            backgroundColor: Colors.grayLight,
            marginTop: '50px',
            height: '520px'
          },
          titleStyle: {
            fontFamily: 'noto-sans-bold',
            fontSize: '40px',
            color: Colors.blueDark,
            marginBottom: '50px'
          },
          textRed: {
            color: Colors.red
          },
          introStyle: {
            fontFamily: 'noto-sans-bold',
            fontSize: '16px',
            color: Colors.grayDark
          },
          descriptionStyle: {
            fontFamily: 'noto-sans-regular',
            fontSize: '16px',
            color: Colors.grayDark,
            paddingBottom: '50px'
          },
          leftWrapperStyle: this.state.style.leftWrapperStyle
        };
    }
  }
}
