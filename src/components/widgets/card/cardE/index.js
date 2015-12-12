import React, { Component, PropTypes} from 'react';

import UtilRD from '../../../../utils/rd';


export default class CardE extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: this.getStyle('INIT')
    };
  }

  componentDidMount() {
    const utilRD = new UtilRD();

    if (utilRD.isTablet(document.body.clientWidth)) {
      this.setState({
        style: _.merge({}, this.state.style, this.getStyle('TABLET'))
      });
    }
    else if (utilRD.isPhone(document.body.clientWidth)) {
      this.setState({
        style: _.merge({}, this.state.style, this.getStyle('PHONE'))
      });
    }
  }

  render() {
    var style = this.getStyle();

    return (
      <div style={style.sprite}></div>
    );
  }

  getStyle(type) {
    switch (type) {
      case 'INIT':
        return {
          sprite: this.props.sprite
        };
        break;
      case 'TABLET':
        return {
          sprite: _.merge({}, this.state.style.sprite, {
            width: '100%'
          })
        };
      default:
        return {
          sprite: this.state.style.sprite
        };
    }
  }
}

CardE.propTypes = {
  sprite: React.PropTypes.object.isRequired
}
