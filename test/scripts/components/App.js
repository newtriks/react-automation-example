/**
 * @jsx React.DOM
 */

'use strict';

var ReactTestUtils;
var App = require('../../../src/scripts/components/App');
var React = require('react/addons');

describe('App', function () {
  var imageURL;
  beforeEach(function () {
    ReactTestUtils = React.addons.ReactTestUtils;
    imageURL = 'foo';
  });

  it('should do something', function () {
    var app = <App />;
    ReactTestUtils.renderIntoDocument(app);
    expect(false).toBeFalsy();
  });

});
