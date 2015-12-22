import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import {NoFont, FontA, FontABold} from '../../../constants/fonts';
import Sprites from '../../../constants/sprite';
import Colors from '../../../constants/colors';
import ServiceList from './serviceList';
import SimpleCard from '../../widgets/card/simpleCard';
import ButtonA from '../../widgets/button/buttonA';


export default class Procedures extends Component {

  render() {
    var style = this.getStyle();
    var cards = this.getCards();

    return (
      <div className="container" style={style.wrapper}>

        <div className="row">

          <div className="col-md-6">

            <div className="row">
              <div className="col-md-1">
                <div style={style.icon}></div>
              </div>
              <div className="col-md-8">
                <span style={style.title}>Menú de Servicios</span>
              </div>
            </div>

          </div>

          <div className="col-md-6">
            <div className="row" style={style.direction.wrapper}>

              <div className="col-md-3">

                <div className="row">
                  <div className="col-md-2">
                    <i className="glyphicon glyphicon-menu-left" style={style.glyphicon}></i>
                  </div>
                  <div className="col-md-6">
                    <span style={style.direction.prev}>Anterior</span>
                  </div>
                </div>

              </div>

              <div className="col-md-6">
              </div>

              <div className="col-md-3">

                <div className="row">
                  <div className="col-md-6">
                    <span style={style.direction.next}>Siguiente</span>
                  </div>
                  <div className="col-md-1">
                    <i className="glyphicon glyphicon-menu-right" style={style.glyphicon}></i>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
        <div className="row">
          <br />
        </div>
        <div className="row">
          <div className="col-md-6">
            <div style={style.wrapperList}>
              <ServiceList data={this.props.data} />
            </div>
          </div>
          <div className="col-md-6">
            <SimpleCard data={cards.cardA} />
            <div style={style.buttonAWrapper}>
              <ButtonA text="COMPRAR EN LÍNEA" type="A" />
            </div>
            <div style={style.buttonBWrapper}>
              <ButtonA text="MÁS INFORMACIÓN" type="C" />
            </div>
          </div>
        </div>

      </div>
    );
  }

  getCards() {
    return {
      cardA: {
        elements: [{
          type: 'title',
          text: ['PNP- Pull Notice Program'],
          style: _.merge({}, FontABold.getVariation('procedureE'), {

          })
        }, {
          type: 'description',
          text: ['Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.'],
          style: {
            marginTop: '20px'
          }
        }]
      }
    }
  }

  getStyle() {
    return {
      wrapper: {
        marginTop: '50px',
        marginBottom: '100px'
      },
      wrapperList: {
        marginRight: '30px'
      },
      icon: _.merge({}, Sprites.Procedures.BackToMenu, {

      }),
      glyphicon: _.merge({}, NoFont.getVariation('procedureA'), {

      }),
      title: _.merge({}, FontABold.getVariation('procedureC'), {

      }),
      direction: {
        wrapper: {
          backgroundColor: Colors.grayLight,
          padding: '10px',
          borderRadius: '50px',
          marginTop: '-10px'
        },
        prev: _.merge({}, FontABold.getVariation('procedureC'), {

        }),
        next: _.merge({}, FontABold.getVariation('procedureD'), {

        })
      },
      buttonAWrapper: {
        marginTop: '50px'
      },
      buttonBWrapper: {
        marginTop: '30px'
      }
    }
  }

}

Procedures.propTypes = {
  data: React.PropTypes.array
};
