import React, { Component, PropTypes} from 'react';

import Colors from '../../../constants/colors';
import Sprites from '../../../constants/sprite';
import Fonts from '../../../constants/fonts';
import Card from '../../widgets/card/simpleCard';
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
      }
    };
  }


  render() {
    var data = {
      cardA:{
        wrapper: {
          style: {
            border: 'margin-left: 35px'
          }
        },
        cards: [{
          type: 'title',
          text: ['Expertos en el sector transportista binacional.'],
          style: _.merge({}, Fonts.typeC, {
            marginBottom: '50px'
          })
        },
        {
          type: 'description',
          text: [' Con más de 15 años de experiencia, somos <br />expertos en el sector transportista binacional.'],
          style: _.merge({}, Fonts.typeD)
        }]
      }  
    };

    return (
        <div className="container">
          <div className="row" style={this.state.style.wrapper}>
            <div className="col-xs-10 col-xs-offset-1 col-sm-offset-0" style={this.state.style.vAligner}>
              <Card data={data.cardA} />
            </div>
            <YellowFleck />
          </div>
        </div>
    );
  }
}
