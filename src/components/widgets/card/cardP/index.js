import React, { Component, PropTypes} from 'react';

import ButtonA from '../../button/buttonA';


export default class CardP extends Component {

  render(){

    return (
      <div style={this.props.data.wrapper}>

        <div className="row">
          <div style={this.props.data.sprite}></div>
        </div>

        <div className="row">
          <h1 style={this.props.data.elements[0].style}>
            {this.props.data.elements[0].text}
            <span style={this.props.data.elements[1].style}>{this.props.data.elements[1].text}</span>
          </h1>
        </div>

        <div className="row">
          <div style={this.props.data.elements[2].wrapper.style}>
            <ButtonA text={this.props.data.elements[2].text} type="A" />
          </div>
        </div>

      </div>
    );
  }

}

CardP.propTypes = {
  data: React.PropTypes.object.isRequired
};
