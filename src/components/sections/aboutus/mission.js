import React, { Component, PropTypes} from 'react';

import Colors from '../../../constants/colors';
import Sprites from '../../../sprites/sprite';
import Fonts from '../../../constants/fonts';

import YellowFleck from '../../widgets/YellowFleck';

export default class Mission extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        wrapper: _.merge({}, Fonts.typeA,{
          backgroundColor: Colors.blueDark,
          textAlign: 'center',
          padding: '60px 0 80px',
          position: 'relative'
        }),
        title: _.merge({}, Fonts.typeG, {
          margin: '0 0 30px'
        }),
        subtitle: _.merge({}, Fonts.typeH,{
        }),
        description: _.merge({}, Fonts.typeI,{

        })
      }
    };
  }


  render(){
    return (
      <div className="container">
        <div className="row" style={this.state.style.wrapper}>
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3">
            <h3 style={this.state.style.title}>Nuestra misión</h3>
            <p style={this.state.style.subtitle}>Ayudarte a crecer</p>
            <p style={this.state.style.description}>Ofrecer una amplia gama de productos y servicios de excelencia con coberturas y vigencias adaptables a todos nuestros clientes para así garantizar su total satisfacción e impulsar su crecimiento. En interbrokers te vemos grande.
            </p>
          </div>
          <YellowFleck />
        </div>
      </div>
    );
  }
}
