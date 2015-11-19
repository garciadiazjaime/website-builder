import React, { Component, PropTypes} from 'react';

import Logo from './logo';

export default class Intro extends Component {

  render(){

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-sm-6">
            <Logo />
          </div>
          <div className="col-md-2 col-sm-6">
            Te vemos grande
          </div>
        </div>
      </div>
    );
  }
}
