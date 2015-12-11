import React, { Component, PropTypes} from 'react';

import Colors from '../../../../constants/colors';
import Sprites from '../../../../sprites/sprite';
import Fonts from '../../../../constants/fonts';
import Card from '../../card/simpleCard';


export default class SimpleCarousel extends Component {

  constructor(props) {
    super(props);
  }


  render(){
    var slidesEl = this.getSlides(this.props.data.slides);
    var indicatorsEl = this.getIndicators(this.props.data.slides, this.props.data.meta.id);
    var id = this.props.data.meta.id;
    return (
      <div id={id} className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {indicatorsEl}
        </ol>
        <div className="carousel-inner" role="listbox">
          {slidesEl}
        </div>
        <a className="left carousel-control" href={"#"+id} role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href={"#"+id} role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }

  getSlides(slides) {
    if (_.isArray(slides) && slides.length) {
      return slides.map(function(slide, index) {
        var activeState = this.getActiveState(index);
        return (<div className={"item "+activeState}  key={index} style={slide.wrapper.style}>
                </div>);
      },this)
    }
    return null;
  }

  getIndicators(slides, carouselID) {
    if (_.isArray(slides) && slides.length) {
      return slides.map(function(slide, index) {
        var activeState = this.getActiveState(index);
        return (<li data-target={carouselID} data-slide-to={index} key={index} className={activeState}></li>);
      },this);
    }
    return null;
  }

  getActiveState(index) {
    if (index == 0){
      return "active";
    }
    return null;
  }

}

SimpleCarousel.PropTypes = {
  data: React.PropTypes.object.isRequired
};
