import React, { Component, PropTypes} from 'react';

import Colors from '../../../constants/colors';
import Sprites from '../../../sprites/sprite';


export default class CallUs extends Component {

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
        },
        arrow: {
          color: Colors.yellow,
          top: '3px',
          fontWeight: 'bold',
          fontSize: '16px',
          paddingLeft: '5px'
        }
      }
    };
  }


  render(){
    var titleEl = this.getTitle(this.props.type);

    return (
      <div>
        <p style={this.state.style.title}>
          LLÁMANOS EN {titleEl}
          <i className="glyphicon glyphicon-menu-right" style={this.state.style.arrow}></i>
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
        return 'MÉXICO';
      case 'SAN_DIEGO':
        return 'USA';
    }
  }

}
