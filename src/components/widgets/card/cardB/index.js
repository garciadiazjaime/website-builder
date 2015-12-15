import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import Sprites from '../../../../constants/sprite';
import Colors from '../../../../constants/colors';
import ButtonB from '../../button/buttonB';
import Card from '../../card/simpleCard';


export default class CardB extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    var style = this.getStyle();

    return (
      <div className="row">
        <div style={style.wrapper}>
          <div className="col-md-12 col-sm-10">

            <div className="row">
              <div className="col-md-offset-10 col-sm-offset-8 col-xs-offset-10">
                <div style={style.icon}></div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <Card data={this.props.data} />
              </div>
            </div>

            <div className="row">
              <br className="visible-sm" />
              <div className="col-md-offset-9 col-md-2 col-sm-offset-7 col-sm-5 col-xs-offset-9">
                <ButtonB />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  getStyle() {
    return {
      wrapper: {
        backgroundColor: Colors.red,
        color: Colors.white,
        height: Sprites.HomeBanner.Permits.height,
        width: Sprites.HomeBanner.Permits.width,
        paddingTop: '20px',
        paddingRight: '20px'
      },
      icon: Sprites.General.ArrowBigYellow
    };
  }
}

CardB.propTypes = {
  data: React.PropTypes.object.isRequired
};
