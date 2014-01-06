'use strict';

describe('ImageBox', function () {
  var ImageBox, imageBox;

  beforeEach(function () {
    ImageBox = require('../../../src/scripts/components/ImageBox');
    imageBox = ImageBox({
      imageURL: 'foo'
    });
  });

  it('should run a test', function () {
    expect(true).toBeTruthy();
  });

  it('should pass the correct imageURL value to props', function () {
    expect(imageBox.props.imageURL).toMatch(/foo/);
  });
});
