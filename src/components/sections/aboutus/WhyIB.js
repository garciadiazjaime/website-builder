import React, { Component, PropTypes} from 'react';

import Colors from '../../../constants/colors';
import Sprites from '../../../sprites/sprite';
import Fonts from '../../../constants/fonts';
import Card from '../../widgets/card/simpleCard';
import ButtonA from '../../widgets/button/buttonA';
import Carousel from '../../widgets/carousel/simpleCarousel';

export default class WhyIB extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        paddingAdjuster: {
          padding: '0 0 0 10px'
        }
      }
    }
  }


  render() {

    var cards = this.getCards();
    
    var carouselData = {
      meta: {
        id: 'slide-aboutus'
      },
      slides: [{
        wrapper: {
          style: {
            backgroundImage: "url('http://127.0.0.1:3000/images/aboutus_carousel_slide1.jpg')",
            backgroundSize: "cover",
            height: '500px'
          }
        }
      }]
    };

    return (
      <div className="container">
        <div className="row row-eq-height">
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0">
            <Card data={cards.card1} />
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0" style = {this.state.style.paddingAdjuster}>
            <Carousel data={carouselData} />
          </div>
        </div>
        <div className="row row-eq-height">
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0">
            <Card data={cards.card3} />
            <Card data={cards.card4} />
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0">
             <Card data={cards.card2} />
             <ButtonA text="Contáctanos" type='A' />
          </div>
        </div>
      </div>
    );
  }

  getCards() {
    return {
      card1: {
        wrapper: {
          style: {
            background: Colors.red,
            padding: '50px',
            position: 'relative',
            marginBottom: '20px',
            marginLeft: '-15px',
            marginRight: '-5px',
            maxHeight: '500px'
          }
        },
        elements: [{
          type: 'subtitle',
          text: ['¿Por qué InterBrokers?'],
          style:  _.merge({}, Fonts.typeH, {
            marginBottom: '20px'
          })
        },
        {
          type: 'title',
          text: ['Entendemos tus necesidades, para ofrecerte una solución integral.'],
          style: _.merge({}, Fonts.typeJ,{
            marginBottom: '50px'
          })
        },
        {
          type: 'description',
          text: ['Mientras que la mayoría se limita a la correduría de seguros, InterBrokers sobresale por su extensa oferta de productos y servicios. Desde una amplia variedad servicios para la gestión de trámites y permisos, hasta consultoría privada principalmente dirigida al sector transportista con actividad binacional.'],
          style:  _.merge({}, Fonts.typeI)
        }]
      },
      card2: {
        wrapper: {
          style: {
            background: Colors.red,
            padding: '50px',
            position: 'relative',
            marginRight: '-15px',
            marginLeft: '-5px'
          }
        },
        elements: [{
          type: 'title',
          text: ['Nuestra misión: <br />Ayudarte a crecer. '],
          style: _.merge({}, Fonts.typeJ,{
            marginBottom: '50px'
          })
        },
        {
          type: 'description',
          text: ['En interBrokers creemos en la importancia de la seguridad y tranquilidad de nuestros clientes, es por eso que promovemos una cultura enfocada en la prevención para impulsar su crecimiento, desarrollo y transformación.<br />A través de un servicio cálido, efectivo y personalizado nos ocupamos de entender sus necesidades y ofrecerle una solución integral.<br />Interbrokers ofrece servicios de consultoría, trámites, permisos y seguros, siendo expertos en el sector transportista binacional.'],
          style:  _.merge({}, Fonts.typeI, {
          })
        }]
      },
      card3: {
        wrapper: {
          style: {
             backgroundImage: "url('http://127.0.0.1:3000/images/aboutus_grande_bkg.jpg')",
             backgroundSize: 'cover',
             height: '500px',
             margin: '0 -5px 0 -15px'
          }
        },
        elements: [{
          type: 'description',
          text: [''],
          style: {
            margin: '0'
          }
        }]
      },
      card4: {
        wrapper: {
          style: {
             backgroundColor: Colors.yellow,
             width: '320px',
             padding: '50px 40px',
             margin: '-100px -5px 0 0',
             float: 'right',
             borderBottomLeftRadius: '45px'
          }
        },
        elements: [{
          type: 'title',
          text: ['¿Qué vas a <span style="font-family: noto-sans-bold">hacer</span> cuando seas grande?'],
          style: _.merge({}, Fonts.typeN, {
            margin: '0'
          })
        }]
      }
      
    }
  }
}

