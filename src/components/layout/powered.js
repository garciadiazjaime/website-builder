import React, { Component, PropTypes} from 'react';

import Colors from '../../constants/colors';

export default class Powered extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        mainWrapper: {
          backgroundColor: Colors.grayDarkest,
          color: 'white',
          fontSize: '10px',
          padding: '20px 0',
          fontFamily: 'noto-sans-regular',
          fontWeight: '100'
        },
        anchor: {
          color: 'white'
        }
      }
    }
  }
  render(){

    return (
      <div style={this.state.style.mainWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              Todos los derechos reservados © InterBrokers
            </div>
            <div className="col-md-6">
              <div className="pull-right">
                Un proyecto de: <a title="Branding Pool" style={this.state.style.anchor}>POOL</a> &nbsp;&nbsp;&nbsp;&nbsp;
                Código por: <a title="Diseño y Desarrollo Web en Tijuana" style={this.state.style.anchor}>MINT</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
