import React, { Component, PropTypes} from 'react';
import _ from 'lodash';
import Sprites from '../../../../constants/sprite';
import Fonts from '../../../../constants/fonts';
import ButtonB from '../../buttonB';
import SimpleCard from '../../card/simpleCard';


export default class CardA extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    var style = this.getStyle();

    return (
      <div style={style.integrationSprite} className="img-responsive">
        <div style={style.contentWrapper}>
          <SimpleCard data={this.props.data} />
          <ButtonB />
        </div>
      </div>
    );
  }

  getStyle() {
    return {
      integrationSprite: Sprites.HomeBanner.IntegralService,
      contentWrapper: {
        width: '100%',
        textAlign: 'center',
        position: 'absolute',
        top: '65%',
      },
      title: _.merge({}, Fonts.typeC, {
        paddingBottom: '15px'
      })
    };
  }
}

CardA.propTypes = {
  data: React.PropTypes.object.isRequired
};
