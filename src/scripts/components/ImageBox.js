/**
 * @jsx React.DOM
 */

var React = require('react');
var ReactTransitionGroup = require('react/lib/ReactTransitionGroup');

require('../../styles/image-box.css');

var ImageBox = React.createClass({
  render: function () {
    return (
        <div className="imageBox">
            <ReactTransitionGroup transitionName="fade">
              <p>Image box width: {this.props.appWidth}</p>
              <img src={this.props.imageURL} width={this.props.appWidth/2} />
            </ReactTransitionGroup>
        </div>
      )
  }
});

module.exports = ImageBox;
