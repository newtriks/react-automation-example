/**
 * @jsx React.DOM
 */

var React = require('react');

require('../../styles/image-box.css');

var ImageBox = React.createClass({
  render: function () {
    return (
        <div className="imageBox">
          <p>Image box width: {this.props.appWidth}</p>
          <img src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-prn1/1010076_477783955633350_1900224762_n.png" width={this.props.appWidth/2} />
        </div>
      )
  }
});

module.exports = ImageBox;
