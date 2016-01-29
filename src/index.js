import request from 'axios';

export default class Parse {

  constructor(applicationId, masterKey) {
    this.applicationId = applicationId;
    this.masterKey = masterKey;
  }

  getClientTokens() {
    axios.get('https://api.parse.com/1/installations', {
      headers: {
        'X-Parse-Application-Id': this.applicationId,
        'X-Parse-Master-Key': this.masterKey
      }
    })
    .then(res => {
      console.log(res);
    });
  }
}
