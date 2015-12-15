import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import Sprites from '../../../../constants/sprite';
import Colors from '../../../../constants/colors';
import ButtonA from '../../button/buttonA';
import ButtonC from '../../button/buttonC';
import SimpleCard from '../simpleCard';


export default class CardJ extends Component {

  render(){
    var style = this.getStyle();

    return (
      <div style={style.wrapper}>
        <SimpleCard data={this.props.data} />

        <div className="row">
          <div className="col-md-11">
            <hr style={style.break} />
          </div>
        </div>

        <div>
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

  getStyle() {
    return {
      wrapper: {
        margin: '70px 50px'
      },
      break: {
        margin: '0px 0 30px'
      }
    }
  }
}

CardJ.propTypes = {
  data: React.PropTypes.object.isRequired
};
