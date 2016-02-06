import axios from 'axios';

export default class ParseService {
  constructor(applicationId, masterKey) {
    this.applicationId = applicationId;
    this.masterKey = masterKey;
  }

  /**
   * Retrieve the contents of an installation object
   * https://parse.com/docs/rest/guide#push-notifications-retrieving-installations
   */
  retriveInstallations() {
    return axios.get('https://api.parse.com/1/installations', {
      headers: {
        'X-Parse-Application-Id': this.applicationId,
        'X-Parse-Master-Key': this.masterKey,
      },
    })
    .then(this.checkStatus);
  }

  checkStatus(response) {
    if (response.status < 200 && response.status >= 300) {
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    } else {
      return response;
    }
  }
}
