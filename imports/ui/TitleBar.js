import React, {Component} from 'react';

export default class TitleBar extends Component {
  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
        <h1>{this.props.title}</h1>
      </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title : React.PropTypes.string.isRequired
}
TitleBar.defaultProps = {
  //title = "Default title"
}
