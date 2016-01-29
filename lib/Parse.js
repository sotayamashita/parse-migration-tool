'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parse = function () {
  function Parse(applicationId, masterKey) {
    _classCallCheck(this, Parse);

    this.applicationId = applicationId;
    this.masterKey = masterKey;
  }

  /**
   * Device token
   * https://goo.gl/QJ21wF
   */

  _createClass(Parse, [{
    key: 'getDeviceTokens',
    value: function getDeviceTokens() {
      _axios2.default.get('https://api.parse.com/1/installations', {
        headers: {
          'X-Parse-Application-Id': this.applicationId,
          'X-Parse-Master-Key': this.masterKey
        }
      }).then(function (res) {
        console.log(res);
      });
    }
  }]);

  return Parse;
}();

exports.default = Parse;