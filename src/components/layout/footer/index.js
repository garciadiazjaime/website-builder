import React, { Component, PropTypes} from 'react';

import Logo from '../logo';
import Colors from '../../../constants/colors';
import Sprites from '../../../constants/sprite';
import ButtonD from '../../widgets/ButtonD';
import Location from './location';
import CallUs from './callUs';

var containerStyle = {
  backgroundColor: Colors.grayDark,
  paddingTop: '50px',
  paddingBottom: '60px',
  color: 'white'
};

var titleStyle = {
  fontFamily: 'noto-sans-bold',
  fontSize: '16px',
  borderBottom: '1px solid ' + Colors.grayMedium,
  paddingBottom: '8px',
  maxWidth: '80%',
};

var descriptionStyle = {
  fontFamily: 'noto-sans-regular',
  fontSize: '12px',
  color: Colors.grayMedium
};

var itemStyle = {
  fontFamily: 'noto-sans-bold',
  fontSize: '14px',
  color: Colors.grayMedium,
  display: 'inline-block',
  paddingTop: '15px'
};


export default class Footer extends Component {


  render(){

    var serviciosEL = this.getServiciosItems();

    return (
      <div style={containerStyle}>
        <div className="container">

          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="row">
                <Logo type="ANTI"/>
                <br />
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="row">
                <div className="col-md-6 col-md-offset-4">
                  <div>
                    <ButtonD type="TEXT" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-sm-6">

              <div className="row">
                <div className="col-md-6">
                  <Location type="TIJUANA" />
                </div>
                <div className="col-md-6">
                  <Location type="SAN_DIEGO" />
                </div>
              </div>

              <div className="row">
                <br />
              </div>

              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <CallUs type="TIJUANA" tel="664-623-3035" />
                </div>
                <div className="col-md-6 col-sm-6">
                  <CallUs type="SAN_DIEGO" tel="619-713-7211" />
                </div>
              </div>

            </div>
            <div className="col-md-6 col-sm-6">
              <h3 style={titleStyle}>Servicios</h3>
              <ul>
                {serviciosEL}
              </ul>
            </div>
          </div>

        </div>
      </div>
    );
  }

  getServiciosItems() {
    var data = [{
      title: 'Trámites en Estados Unidos para Transportistas'
    },{
      title: 'Trámites en México para Transportistas'
    },{
      title: 'Trámite de Placas en DMV - Estados Unidos'
    },{
      title: 'Trámite de Placas en SCT - México'
    },{
      title: 'Permisos para Transportistas en Estados Unidos'
    },{
      title: 'Permisos y Servicios para Nuevos Entrantes'
    },{
      title: 'Seguros para Vehículos Comerciales en Estados Unidos'
    },{
      title: 'Seguros para Vehículos Comerciales en México'
    },{
      title: 'Consultoría y Servicio de Auditorias para Empresas Transportistas'
    }];
    return data.map((item, i) => <li key={i}><a style={itemStyle}>{item.title}</a></li>);
  }
}
