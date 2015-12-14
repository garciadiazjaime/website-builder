import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import SimpleCard from '../simpleCard';


export default class CardI extends Component {

  render(){
    var style = this.getStyle();

    return (
      <div className="row">

        <div style={style.wrapper}>

          <div className="col-md-3 col-sm-12">
            <div>
              <div style={this.props.sprite}></div>
            </div>
          </div>

          <div className="col-md-9 col-sm-12">
            <SimpleCard data={this.props.data} />
            {this.props.children}
          </div>

        </div>

      </div>
    );
  }

  getStyle() {
    return {
      wrapper: {
        padding: '50px 0 0 60px'
      }
    }
  }
}

CardI.proptyps = {
  data: React.PropTypes.object.isRequired,
  sprite: React.PropTypes.object.isRequired
}
