import React, { Component, PropTypes} from 'react';

import Colors from '../../../constants/colors';
import Sprites from '../../../sprites/sprite';
import Fonts from '../../../constants/fonts';
import Card from '../card/simpleCard';
import CarouselIndicator from './indicators';

export default class Carousel extends Component {

  constructor(props) {
    super(props);
  }


  render(){
    var Indicators = {
      no1: [{
        number: '0',
        cid: 'carousel'
      }],
      no2: [{
        number: '1',
        cid: 'carousel'
      }]
    }
    return (
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <CarouselIndicator data={Indicators.no1} />
          <CarouselIndicator data={Indicators.no2} />
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="item active">
            Hola
          </div>
        </div>

        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

