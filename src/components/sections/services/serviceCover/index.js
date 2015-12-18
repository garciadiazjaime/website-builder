import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import CardO from '../../../widgets/card/cardO';


export default class ServiceCover extends Component {


  render() {
    var style = this.getStyle();
    var cardEl = this.renderCard(this.props.data);

    return (<div className="row" style={style.wrapper}>
      {cardEl}
    </div>);
  }

  renderCard(data) {
    if (_.isArray(data) && data.length) {

      return data.map((service, index) => {

        if (service.type.toUpperCase() === 'TITLE') {
          var data = this.getData(service);
          return (<CardO key={index} data={data} />);
        }

      }, this);

    }
  }

  getData(data) {
    return {
      sprite: data.logo,
      title: data.shortTitle,
      description: data.intro[0]
    }
  }

  getStyle() {
    return {
      wrapper: {
        marginTop: '50px'
      }
    }
  }
}

ServiceCover.propTypes = {
  data: React.PropTypes.array.isRequired
};
