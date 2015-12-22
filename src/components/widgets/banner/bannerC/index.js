import React, { Component, PropTypes} from 'react';

import SimpleCard from '../../card/simpleCard';


export default class BannerC extends Component {

  render() {
    var style = this.getStyle();

    return (
        <div className="container">
          <div className="row" style={style.wrapper}>
            <div className="col-xs-10 col-xs-offset-1 col-sm-offset-0">
              <SimpleCard data={this.props.data} />
            </div>
          </div>
        </div>
    );
  }

  getStyle() {
    return {
      wrapper: _.merge({}, this.props.sprite, {
      })
    }
  }
};

BannerC.propTypes = {
  data: React.PropTypes.object.isRequired
}
