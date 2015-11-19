import React, { Component, PropTypes} from 'react';

export default class Route extends Component {

  render(){

    return (
      <div className="row">
        <div className="col-md-4 col-sm-12">
          {this.props.data.name}
        </div>
        <div className="col-md-4 col-sm-12">
          {this.getCategory(this.props.data.category)}
        </div>
        <div className="col-md-4 col-sm-12">
          <button onClick={e => this.handleClick(e)} className="btn btn-default">Ver</button>
        </div>
      </div>
    );
  }

  handleClick(e) {
    this.props.setRoute(this.props.data);
  }

  getCategory(category) {
    switch(category) {
      case 1:
        return 'Taxy';
      case 2:
        return 'Camion';
      case 3:
        return 'Calafia';
      default:
        return '';
    }
  }
}

Route.propTypes = {
  data: PropTypes.object.isRequired
};
