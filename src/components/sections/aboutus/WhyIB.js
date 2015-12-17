import React, { Component, PropTypes} from 'react';

import Colors from '../../../constants/colors';
import Sprites from '../../../constants/sprite';
import Fonts from '../../../constants/fonts';
import Card from '../../widgets/card/simpleCard';
import ButtonA from '../../widgets/button/buttonA';
import Carousel from '../../widgets/carousel/simpleCarousel';
import UtilRD from '../../../utils/rd';

export default class WhyIB extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: this.getStyle()
    }
  }

  componentDidMount(){
    const utilRD = new UtilRD();

    if (utilRD.isTablet(document.body.clientWidth)) {
      this.setState({
        style: _.merge({}, this.state.style, this.getStyle('TABLET'))
      });
    }
  }

  render() {

    var cards = this.getCards();
    
    var carouselData = {
      meta: {
        id: 'slide-aboutus',
        style: {
          background: Colors.blueDark,
          height: '50px',
          width: '50px',
          color: Colors.yellow,
          textShadow: 'none',
          opacity: '1',
          top: '50%',
          transform: 'translateY(-50%)'
        },
        arrowLeft: Sprites.Aboutus.CarouselLeftArrow,
        arrowRight: Sprites.Aboutus.CarouselRightArrow,
        indicators: {
          display: 'none'
        }
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
        <div className="row"> 
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0" style = {this.state.style.setHeightSm}>
            <Card data={cards.card1} />
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0" style = {this.state.style.paddingAdjuster}>
            <Carousel data={carouselData} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0" style = {this.state.style.setHeightLg}>
            <Card data={cards.card3} />
            <Card data={cards.card4} />
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0" style = {this.state.style.setHeightLg}>
             <Card data={cards.card2} />
             <div style={this.state.style.redBox}><ButtonA text="Contáctanos" type='A' /></div>
          </div>
        </div>
      </div>
    );
  }
  getStyle(type){
    switch(type){
      case('TABLET'): 
      return {
        setHeightSm: _.merge({}, this.state.style.setHeightSm, {
          maxHeight: '665px'
        }),
        setHeightLg: _.merge({}, this.state.style.setHeightLg, {
          height: '767px'
        })
      }
      default:
        return {
          paddingAdjuster: {
            padding: '0 0 0 10px',
          },
          redBox:{
            backgroundColor: Colors.red,
            padding: '0 0 50px 50px',
            margin: '0 -15px 0 -5px'
          },
          setHeightSm: {
            maxHeight: '500px',
            overflow: 'hidden',
            marginBottom: '20px'
          },
          setHeightLg: {
            height: '580px',
            overflow: 'hidden'
          }
        };
    }
 }
  getCards() {
    return {
      card1: {
        wrapper: {
          style: {
            background: Colors.red,
            padding: '50px',
            position: 'relative',
            marginLeft: '-15px',
            marginRight: '-5px',
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
             position: 'absolute',
             bottom: '0',
             right: '10px',
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

