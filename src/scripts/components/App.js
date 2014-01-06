/**
 * @jsx React.DOM
 */

var React = require('react/addons');

var ImageBox = require('./ImageBox');

// CSS
require('../../styles/reset.css');
require('../../styles/app.css');

var imageURL = 'https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-prn1/1010076_477783955633350_1900224762_n.png';

var App = React.createClass({
  getInitialState: function() {
    return {windowWidth: window.innerWidth};
  },

  handleResize: function(e) {
    this.setState({windowWidth: window.innerWidth});
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },

  render: function() {
    return (
      <div className="app">
        <ImageBox appWidth={this.state.windowWidth} imageURL={imageURL}/>
        <p>Current window width: {this.state.windowWidth}</p>
      </div>
    );
  }
});

React.renderComponent(<App />, document.getElementById('content'));

module.exports = App;
