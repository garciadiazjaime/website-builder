import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import ServiceList from '../serviceList';

import CardL from '../../../widgets/card/cardL';
import CardM from '../../../widgets/card/cardM';


export default class ServiceDetail extends Component {

  render() {
    var component = null;
    var data = this.props.data;

    component = data.map((service, index) => {

      var arealEl = service.elements.map((area, indexArea) => {

        var leftData = this.getData(area);

        return (<div className="row" key={indexArea} style={area.wrapper.style.main}>
          <div className="col-md-6">
            <CardM data={leftData} />
          </div>
          <div className="col-md-6" style={area.wrapper.style.right}>
            <ServiceList data={area.elements} />
          </div>
        </div>);

      }); // end service.elements.map

      var titleData = this.getData(service);

      return (<div key={index}>
          <div className="row">
            <CardL data={titleData} />
          </div>
          {arealEl}
        </div>
      );

    }, this); // data.map

    return (<div>{component}</div>);
  }

  getData(data) {
    return {
      title: data.title,
      type: data.type,
      subtitle: data.subtitle,
      sprite: data.sprite
    };
  }
};

ServiceDetail.propTypes = {
  data: React.PropTypes.array.isRequired
};
