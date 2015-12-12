import React, { Component, PropTypes} from 'react';
import _ from 'lodash';
import Sprites from '../../../constants/sprite';
import Colors from '../../../constants/colors';
import ButtonA from '../../widgets/button/buttonA';
import ButtonB from '../../widgets/button/buttonB';

var nuevoEntrante = _.merge({}, Sprites.Home.NuevoEntrante, {
  padding: '90px 0 0 250px',
  marginLeft: '-22px'
});

var containerStyle = {
  marginTop: '50px'
};

var leftWrapperStyle = {
  paddingLeft: '35px'
}

var titleStyle = {
  fontFamily: 'noto-sans-bold',
  fontSize: '35px',
  color: Colors.blueDark,
  marginTop: '70px',
  marginBottom: '50px'
};

var textRed = {
  color: Colors.red
};

var subtitleStyle = {
  fontFamily: 'noto-sans-bold',
  fontSize: '35px',
  color: 'white'
};

var descriptionStyle = {
  fontFamily: 'noto-sans-regular',
  fontSize: '16px',
  color: 'white'
};

var buttonContainer = {
  marginTop: '22px'
}

export default class Entry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nuevoEntrante: nuevoEntrante,
      titleStyle: titleStyle
    }
  }

  componentDidMount(){
    if (document.body.clientWidth > 320 && document.body.clientWidth < 1024) {
      this.setState({
        nuevoEntrante: _.merge({}, nuevoEntrante, {
          marginLeft: '0',
          width: '100%'
        }),
        titleStyle: _.merge({}, titleStyle, {
          fontSize: '25px'
        })
      });
    }
  }

  render(){

    return (
      <div className="container" style={containerStyle}>
        <div className="row">
          <div className="col-md-6 col-sm-4 col-xs-12">
            <div style={leftWrapperStyle}>
              <h2 style={this.state.titleStyle}>
                Impulsemos el<br />
                crecimiento<br />
                de tu empresa <br />
                transportista.
              </h2>
              <ButtonA text="CONTÁCTANOS" />
            </div>
          </div>
          <div className="col-md-6 col-sm-8 col-xs-12 hidden-xs">
            <div className="row">
              <div style={this.state.nuevoEntrante}>
                <h2 style={subtitleStyle}>Nuevo <br />Entrante</h2>
                <p style={descriptionStyle}>
                  Conoce todo lo que necesitas <br />
                  para operar tu compañía <br />
                  transportista en Estados Unidos.</p>
                <p style={buttonContainer}>
                  <ButtonB />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
