import React, { Component, PropTypes} from 'react';
import _ from 'lodash';
import Sprites from '../../../../constants/sprite';
import Card from '../simpleCard';
import Arrow from '../../arrow/arrowA';


export default class CardC extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        sprites: Sprites.HomeBanner,
        btnWithText: {
          width: '100%',
          position: 'absolute',
          top: '40%'
        }
      }
    }
  }

  render(){

    return (
      <div className="row">
        <div className="col-md-12">
          <div style={this.state.style.sprites[this.props.sprite]} className="img-responsive">
            <div style={this.state.style.btnWithText}>
              <div className="row">
                <div className="col-md-6 col-md-offset-2">
                  <Card data={this.props.data} />
                </div>
                <div className="col-md-4">
                  <Arrow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CardC.propTypes = {
  data: React.PropTypes.object.isRequired,
  sprite: React.PropTypes.string.isRequired
};
