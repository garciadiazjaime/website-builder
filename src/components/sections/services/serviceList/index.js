import React, { Component, PropTypes} from 'react';

import Sprites from '../../../../constants/sprite';
import CardN from '../../../widgets/card/cardN';


export default class ServiceList extends Component {

  render() {
    var component = this.props.data.map((item, indexItem) => {
      var data = this.getData(item);
      return (<CardN data={data} key={indexItem} />)
    }, this);

    return (<div>{component}</div>);
  }

  getData(data) {
    return {
      title: data.title,
      sprite: Sprites.Services.Bullet
    }
  }
}

ServiceList.propTypes = {
  data: React.PropTypes.array.isRequired
};
