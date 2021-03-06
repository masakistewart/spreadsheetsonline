/* eslint-env mocha */

const { expect } = require('chai');
const tools = require('../../db/tools');
const testItem = require('../../data/basicObjectRef.json');

describe('tools handles all the db functions', () => {
  it('should have a check item function', () => {
    expect(typeof tools.checkObject).to.equal('function');
  });

  it('should add all the right values', () => {
    const missing = {};
    const actualMissing = tools.checkObject(missing, testItem);
    expect(Object.keys(actualMissing).toString()).to.equal(
      Object.keys(testItem).toString(),
    );
  });
});
