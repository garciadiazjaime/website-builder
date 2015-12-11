import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import Sprites from '../../../../constants/sprite';
import Card from '../simpleCard';
import Arrow from '../../arrow/arrowA';


export default class CardC extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    var style = this.getStyle();

    return (
      <div className="row">
        <div style={style.sprites[this.props.sprite]} className="img-responsive">
          <div style={style.contentWrapper}>

            <div className="row">
              <div className="col-md-6 col-md-offset-2 col-sm-8 col-sm-offset-1 col-xs-5 col-xs-offset-2">
                <Card data={this.props.data} />
              </div>
              <div className="col-md-4 col-sm-1">
                <Arrow />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  getStyle() {
    return {
      sprites: Sprites.HomeBanner,
      contentWrapper: {
        width: '100%',
        position: 'absolute',
        top: '40%'
      }
    };
  }

}

CardC.propTypes = {
  data: React.PropTypes.object.isRequired,
  sprite: React.PropTypes.string.isRequired
};
