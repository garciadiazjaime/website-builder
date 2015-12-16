import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import Colors from '../../../../constants/colors';
import SimpleCard from '../simpleCard';


export default class CardH extends Component {

  render(){
    var style = this.getStyle();

    return (
        <div className="row" style={style.wrapper}>

          <div className="col-md-4">
            <div style={style.imgWrapper}>
              <div style={this.props.sprite}></div>
            </div>
          </div>

          <div className="col-md-7 col-md-offset-1">
            <SimpleCard data={this.props.data} />
            {this.props.children}
          </div>

        </div>
    );
  }

  getStyle() {
    return {
      wrapper: {
        backgroundColor: Colors.red,
        borderBottomLeftRadius: '35px'
      },
      imgWrapper: {
        padding: '50px 0 0 50px'
      }
    }
  }
}

CardH.proptyps = {
  data: React.PropTypes.object.isRequired,
  sprite: React.PropTypes.object.isRequired
}
