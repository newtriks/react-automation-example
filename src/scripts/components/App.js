/**
 * @jsx React.DOM
 */

var React = require('react');

var ImageBox = require('./ImageBox');

require('../../styles/reset.css');
require('../../styles/app.css');

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
        <ImageBox appWidth={this.state.windowWidth}/>
        <p>Current window width: {this.state.windowWidth}</p>
      </div>
    );
  }
});

React.renderComponent(<App />, document.getElementById('content'));

module.exports = App;
