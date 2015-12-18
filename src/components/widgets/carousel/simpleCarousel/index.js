import React, { Component, PropTypes} from 'react';

import Colors from '../../../../constants/colors';
import Sprites from '../../../../constants/sprite';
import Fonts from '../../../../constants/fonts';
import Card from '../../card/simpleCard';


export default class SimpleCarousel extends Component {

  constructor(props) {
    super(props);
  }


  render(){
    var slidesEl = this.getSlides(this.props.data.slides);
    var controls = this.getControls(this.props.data.meta, this.props.data.meta.id);
    var indicatorsEl = this.getIndicators(this.props.data.slides, this.props.data.meta.id, this.props.data.meta.indicators);
    var id = this.props.data.meta.id;
    return (
      <div id={id} className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {indicatorsEl}
        </ol>
        <div className="carousel-inner" role="listbox">
          {slidesEl}
        </div>
        {controls}
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

  getIndicators(slides, carouselID, indicatorStyle) {
    if (_.isArray(slides) && slides.length) {
      return slides.map(function(slide, index) {
        var activeState = this.getActiveState(index);
        return (<li data-target={carouselID} data-slide-to={index} key={index} className={activeState} style={indicatorStyle}></li>);
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

  getControls(meta, carouselID) {
    var ArrowStyle = {
      leftArrow: _.merge({}, meta.arrowLeft,{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translateY(-50%) translateX(-50%)'
        }),
      rightArrow: _.merge({}, meta.arrowRight,{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translateY(-50%) translateX(-50%)'
        })
    }
    return (<div>
        <a className="left carousel-control" href={"#"+carouselID} role="button" data-slide="prev" style={meta.style}>
          <div style= {ArrowStyle.leftArrow} aria-hidden="true"></div>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href={"#"+carouselID} role="button" data-slide="next" style={meta.style}>
          <div style= {ArrowStyle.rightArrow} aria-hidden="true"></div>
          <span className="sr-only">Next</span>
        </a>
        </div>);
  }
 
}

SimpleCarousel.PropTypes = {
  data: React.PropTypes.object.isRequired
};
