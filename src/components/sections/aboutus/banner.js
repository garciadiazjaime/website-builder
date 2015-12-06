import React, { Component, PropTypes} from 'react';

import Colors from '../../../constants/colors';
import Sprites from '../../../sprites/sprite';


export default class banner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        title: {
          fontFamily: 'noto-sans-bold',
          fontSize: '12px',
          color: Colors.yellow
        },
        description: {
          fontFamily: 'noto-sans-bold',
          fontSize: '25px',
          color: 'white'
        }
      }
    };
  }


  render(){
    var titleEl = this.getTitle(this.props.type);

    return (
      <div>
        <p style={this.state.style.title}>
          {titleEl} <i></i>
        </p>
        <p>
          <a style={this.state.style.description}>{this.props.tel}</a>
        </p>
      </div>
    );
  }

  getTitle(type) {
    switch (type) {
      case 'TIJUANA':
        return 'LÁMANOS EN MÉXICO';
      case 'SAN_DIEGO':
        return 'LLÁMANOS EN USA';
    }
  }

}