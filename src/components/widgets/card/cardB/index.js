import React, { Component, PropTypes} from 'react';
import _ from 'lodash';
import Sprites from '../../../../constants/sprite';
import Colors from '../../../../constants/colors';
import Fonts from '../../../../constants/fonts';
import ButtonB from '../../buttonB';
import Card from '../../card/simpleCard';


export default class CardB extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        contentWrapper: {
          backgroundColor: Colors.red,
          color: Colors.white,
          height: Sprites.HomeBanner.Permits.height,
          width: Sprites.HomeBanner.Permits.width,
          padding: '18px 40px 0 20px'
        },
        arrowBigYellow: Sprites.General.ArrowBigYellow,
        alignTextRight: {
          textAlign: 'right'
        }
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
      <div style={this.state.style.contentWrapper}>
        <div className="pull-right" style={this.state.style.arrowBigYellow}></div>
        <br className="clear-fix" />
        <Card data={this.props.data} />
        <div style={this.state.style.alignTextRight}>
          <ButtonB />
        </div>
      </div>
    );
  }
}

CardB.propTypes = {
  data: React.PropTypes.object.isRequired
};
