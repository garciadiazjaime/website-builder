import React, { Component, PropTypes} from 'react';

import Colors from '../../../constants/colors';
import Sprites from '../../../constants/sprite';
import Fonts from '../../../constants/fonts';

import YellowFleck from '../../widgets/YellowFleck';


export default class Banner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        banner: {
          backgroundImage: "url('http://127.0.0.1:3000/images/aboutUs-banner-bg.jpg')",
          height: '512px',
          position: 'relative'
        },
        bannerContent:{
          position: 'relative',
          top: '50%',
          transform: 'translateY(-50%)',
          WebkitTransform: 'translateY(-50%)',
          MsTransform: 'translateY(-50%)',
          color: 'white'
        },
        bannerP: _.merge({}, Fonts.typeA,{
          marginLeft: '35px',
          color: '#fff'
        }),
        bannerH1: _.merge({}, Fonts.typeB,{
          fontSize: '40px',
          marginLeft: '35px',
          marginBottom: '40px',
          color: '#fff'
        })
      }
    };
  }


  render(){
    return (
        <div className="container">
          <div className="row" style={this.state.style.banner}>
            <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-0" style={this.state.style.bannerContent}>
              <h1 style={this.state.style.bannerH1}>
                Expertos en el sector transportista binacional.
              </h1>
              <p style={this.state.style.bannerP}>
                Con más de 15 años de experiencia, somos <br />expertos en el sector transportista binacional.
              </p>
            </div>
            <YellowFleck />
          </div>
        </div>
    );
  }
}
