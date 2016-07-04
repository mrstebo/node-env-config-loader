var expect = require('chai').expect;
var path = require('path');
var config = require('../lib/node-env-config');

describe('node-env-config', function() {
  describe('#load', function() {
    it('should load json files', function() {
      var value1 = (process.env.MY_VALUE_1 = 'John');
      var value2 = (process.env.MY_VALUE_2 = 'Smith');
      var result = config.load(path.join(__dirname, 'config/config.json'));

      expect(result).to.deep.equal({
        test: {
          my_value_1: value1,
          my_value_2: value2
        }
      });
    });
    it('should load YAML files', function() {
      var value1 = (process.env.MY_VALUE_1 = 'John');
      var value2 = (process.env.MY_VALUE_2 = 'Smith');
      var result = config.load(path.join(__dirname, 'config/config.yaml'));

      expect(result).to.deep.equal({
        test: {
          my_value_1: value1,
          my_value_2: value2
        }
      });
    });
    it('should load YML files', function() {
      var value1 = (process.env.MY_VALUE_1 = 'John');
      var value2 = (process.env.MY_VALUE_2 = 'Smith');
      var result = config.load(path.join(__dirname, 'config/config.yml'));

      expect(result).to.deep.equal({
        test: {
          my_value_1: value1,
          my_value_2: value2
        }
      });
    });
  });
});
