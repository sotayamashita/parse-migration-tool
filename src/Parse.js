import axios from 'axios';

export default class Parse {

  constructor(applicationId, masterKey) {
    this.applicationId = applicationId;
    this.masterKey = masterKey;
  }

  /**
   * Device token
   * https://goo.gl/QJ21wF
   */
  getDeviceTokens() {
    axios.get('https://api.parse.com/1/installations', {
      headers: {
        'X-Parse-Application-Id': this.applicationId,
        'X-Parse-Master-Key': this.masterKey,
      },
    })
    .then(res => res.json())
    .then(result => result.data.result);
  }
}
