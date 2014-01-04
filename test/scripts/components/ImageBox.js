/**
 * @jsx React.DOM
 */

'use strict';

var ReactTestUtils;
var ImageBox = require('../../../src/scripts/components/ImageBox');
var React = require('react/addons');

describe('ImageBox', function () {
  var imageURL;
  beforeEach(function () {
    ReactTestUtils = React.addons.ReactTestUtils;
    imageURL = 'foo';
  });

  it('should do something', function () {
    var imageBox = <ImageBox imageURL={imageURL}/>;
    ReactTestUtils.renderIntoDocument(imageBox);
    expect(false).toBeFalsy();
  });

});
