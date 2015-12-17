import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import CardL from '../../widgets/card/cardL';
import CardM from '../../widgets/card/cardM';
import CardN from '../../widgets/card/cardN';


// import Logo from '../logo';
import Colors from '../../../constants/colors';
import Sprites from '../../../constants/sprite';
import ButtonD from '../../widgets/button/ButtonD';

// import Location from './location';
// import CallUs from './callUs';

// var containerStyle = {
//   backgroundColor: Colors.grayDark,
//   paddingTop: '50px',
//   paddingBottom: '60px',
//   color: 'white'
// };
//
// var titleStyle = {
//   fontFamily: 'noto-sans-bold',
//   fontSize: '16px',
//   borderBottom: '1px solid ' + Colors.grayMedium,
//   paddingBottom: '8px',
//   maxWidth: '80%',
// };
//
// var descriptionStyle = {
//   fontFamily: 'noto-sans-regular',
//   fontSize: '12px',
//   color: Colors.grayMedium
// };
//
// var itemStyle = {
//   fontFamily: 'noto-sans-bold',
//   fontSize: '14px',
//   color: Colors.grayMedium,
//   display: 'inline-block',
//   paddingTop: '15px'
// };


export default class Services extends Component {


  render(){

    // var serviciosEL = this.getServiciosItems();
    var servicesEl = this.renderServices(this.props.data);

    return (
      <div className="container">

          {servicesEl}

      </div>
    );
  }

  renderServices(data) {
    var response = null;
    if (_.isArray(data) && data.length) {
      return data.map((service, index) => {

        var arealEl = service.elements.map((area, indexArea) => {

          var itemEl = area.elements.map((item, indexItem) => {
            return (<CardN title={item.title} key={indexItem} sprite={Sprites.Services.Bullet} />)
          });

          return (<div className="row" key={indexArea} style={area.wrapper.style.main}>
            <div className="col-md-6">
              <CardM title={area.title} subtitle={area.subtitle} sprite={area.sprite} />
            </div>
            <div className="col-md-6" style={area.wrapper.style.right}>
              {itemEl}
            </div>
          </div>);
        });

        return (<div key={index}>
            <div className="row">
              <CardL title={service.title} type={service.type} sprite={service.sprite} />
            </div>
            {arealEl}
          </div>
        );
      }, this);
    }
  }
}

Services.propTypes = {
  data: React.PropTypes.array.isRequired
};
