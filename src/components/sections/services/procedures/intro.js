import React, { Component, PropTypes} from 'react';

import {FontA, FontABold} from '../../../../constants/fonts';
import Sprites from '../../../../constants/sprite';
import Colors from '../../../../constants/colors';
import CardP from '../../../widgets/card/cardP';
import SimpleCard from '../../../widgets/card/simpleCard';


export default class Intro extends Component {

  render() {
    var cards = this.getCards();
    var style = this.getStyle();

    return (
        <div className="container" style={style.wrapper}>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <CardP data={cards.cardA} />
              </div>
            </div>
            <div className="col-md-6">
              <SimpleCard data={cards.cardB} />
            </div>
          </div>
        </div>
    );
  }

  getCards() {
    return {
      cardA: {
        wrapper: {
          marginRight: '30px',
          padding: '50px 0 0 50px',
          background: Colors.red,
          height: '350px'
        },
        sprite: _.merge({}, Sprites.Procedures.ProcedureUsa, {}),
        elements: [{
          text: 'Trámites en',
          style: _.merge({}, FontABold.getVariation('homeB'), {
            marginTop: '40px'
          })
        }, {
          text: 'USA',
          style: _.merge({}, FontABold.getVariation('procedureB'), {
            marginTop: '40px',
            marginLeft: '10px'
          })
        }, {
          text: 'CONTÁCTANOS',
          url: '',
          wrapper: {
            style: {
              marginTop: '35px'
            }
          }
        }]
      },
      cardB: {
        elements: [{
          type: 'title',
          text: ['Trámites, cuotas y registros necesarios <br /> para el ingreso y la circulación de <br /> vehículos comerciales dentro de la Unión <br /> Americana.'],
          style: _.merge({}, FontABold.getVariation('procedureA'), {
            marginTop: '30px'
          })
        }, {
          type: 'description',
          text: ['Desde mantener actualizados los datos y actividades de tus empleados, tener al día las revisiones de tus terminales de carga y cubrir oportunamente las cuotas por los servicios aduanales, así como por los derechos de tránsito en territorio norteamericano, InterBrokers se encarga de todo.',
            'Evita largas filas, InteBrokers te ayuda a gestionar los trámites que tu empresa transportista necesita.'
          ],
          style: _.merge({}, FontA.getVariation('headerA'), {
            marginTop: '20px'
          })
        }]
      }
    }
  }

  getStyle() {
    return {
      wrapper: {
        marginTop: '50px'
      }
    };
  }

};
