import React, { Component, PropTypes} from 'react';
import _ from 'lodash';


export default class simpleCard extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    var data = this.props.data;
    return (
      <div>
        {
          data.title ?
          <h1 style={data.title.style} dangerouslySetInnerHTML={this.sanitize(data.title.text)}></h1> : null
        }
        {
          data.subtitle ?
          <h2 style={data.subtitle.style} dangerouslySetInnerHTML={this.sanitize(data.subtitle.text)}></h2> : null
        }
        {
          data.description ?
            <p style={data.description.style} dangerouslySetInnerHTML={this.sanitize(data.description.text)}></p> : null
        }
      </div>
    );
  }

  sanitize(value) {
    return {
      __html: value
    };
  }
}

simpleCard.propTypes = {
  data: React.PropTypes.object.isRequired
};
