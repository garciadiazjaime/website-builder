import React, { Component, PropTypes} from 'react';
import _ from 'lodash';


export default class simpleCard extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    var Components = this.props.data.map((item) => {
      switch (item.type.toUpperCase()) {
        case 'TITLE':
          return this.getTitle(item);
        case 'SUBTITLE':
          return this.getSubtitle(item);
        case 'DESCRIPTION':
          return this.getDescription(item);
        default:
          return null;
      }
    });
    return (
      <div>
        {Components}
      </div>
    );
  }

  getTitle(data) {
    if (data && _.isArray(data.text)) {
      return data.text.map((text) => {
        return (<h1 style={data.style} dangerouslySetInnerHTML={this.sanitize(text)}></h1>);
      })
    }
  }

  getSubtitle(data) {
    if (data && _.isArray(data.text)) {
      return data.text.map((text) => {
        return (<h2 style={data.style} dangerouslySetInnerHTML={this.sanitize(text)}></h2>);
      })
    }
  }

  getDescription(data) {
    if (data && _.isArray(data.text)) {
      return data.text.map((text) => {
        return (<p style={data.style} dangerouslySetInnerHTML={this.sanitize(text)}></p>);
      })
    }
  }

  sanitize(value) {
    return {
      __html: value
    };
  }
}

simpleCard.propTypes = {
  data: React.PropTypes.array.isRequired
};