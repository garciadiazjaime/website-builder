import React, { Component, PropTypes} from 'react';
import _ from 'lodash';
import Sprites from '../../../../constants/sprite';
import Fonts from '../../../../constants/fonts';
import ButtonB from '../../buttonB';
import Card from '../../card/simpleCard';


export default class CardA extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
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
      }
    }
  }

  componentDidMount(){
    if (document.body.clientWidth > 320 && document.body.clientWidth < 1024) {
      this.setState({
      });
    }
  }

  render(){

    return (
      <div style={this.state.style.integrationSprite} className="img-responsive">
        <div style={this.state.style.contentWrapper}>
          <Card data={this.props.data} />
          <ButtonB />
        </div>
      </div>
    );
  }
}

CardA.propTypes = {
  data: React.PropTypes.object.isRequired
};
