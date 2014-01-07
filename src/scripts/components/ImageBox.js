/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons'); // jshint ignore:line
var ReactTransitionGroup = React.addons.TransitionGroup;

require('../../styles/image-box.css');

var ImageBox = React.createClass({
  /*jshint ignore:start */
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
  /*jshint ignore:end */
});

module.exports = ImageBox;
