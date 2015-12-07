import React, { Component, PropTypes} from 'react';

import Colors from '../../../constants/colors';
import Sprites from '../../../constants/sprite';


var locationStyle = Sprites.General.Location;

var descriptionStyle = {
  fontFamily: 'noto-sans-regular',
  fontSize: '12px',
  color: Colors.grayMedium
};

var titleStyle = {
  fontFamily: 'noto-sans-bold',
  fontSize: '16px',
  borderBottom: '1px solid ' + Colors.grayMedium,
  paddingBottom: '8px',
  maxWidth: '80%',
  marginBottom: '20px'
};


export default class Location extends Component {


  render(){
    var titleEl = this.getTitle(this.props.type);
    var descriptionEl = this.getDescription(this.props.type);

    return (
      <div className="row">
        <div className="col-md-12">
          <h3 style={titleStyle}>{titleEl}</h3>
        </div>
        <div className="col-md-2">
          <div style={locationStyle}></div>
        </div>
        <div className="col-md-10">
          <p style={descriptionStyle}>
            {descriptionEl}
          </p>
        </div>
      </div>
    );
  }

  getTitle(type) {
    switch (type) {
      case 'TIJUANA':
        return 'TIJUANA, MÉXICO';
      case 'SAN_DIEGO':
        return 'SAN DIEGO, CA.';
    }
  }

  getDescription(type) {
    switch (type) {
      case 'TIJUANA':
        return (<span>
          Blvd. Bellas Artes 285, <br />
          Fracc. Nueva Tijuana <br />
          Tijuana, B.C. 22435 <br />
          664.623.3035 <br />
          01.800.788.04.08
        </span>);
      case 'SAN_DIEGO':
        return (<span>
          9765 Marconi Dr. <br />
          Suite 200G San Diego, <br />
          Ca. 92154 <br />
          619 713.7211
        </span>);

    }
  }

}
