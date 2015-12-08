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
        wrapper: {
          backgroundImage: "url('http://127.0.0.1:3000/images/aboutUs-banner-bg.jpg')",
          height: '512px',
          position: 'relative'
        },
        vAligner: {
          position: 'relative',
          top: '50%',
          transform: 'translateY(-50%)',
          WebkitTransform: 'translateY(-50%)',
          MsTransform: 'translateY(-50%)'
        },
        title: _.merge({}, Fonts.typeC, {
          margin: '0 0 50px 35px'
        }),
        description: _.merge({}, Fonts.typeD, {
          marginLeft: '35px'
        })
      }
    };
  }


  render(){
    return (
        <div className="container">
          <div className="row" style={this.state.style.wrapper}>
            <div className="col-xs-10 col-xs-offset-1 col-sm-offset-0" style={this.state.style.vAligner}>
              <h1 style={this.state.style.title}>
                Expertos en el sector transportista binacional.
              </h1>
              <p style={this.state.style.description}>
                Con más de 15 años de experiencia, somos <br />expertos en el sector transportista binacional.
              </p>
            </div>
            <YellowFleck />
          </div>
        </div>
    );
  }
}
