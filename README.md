<p align="center">
  <img src="https://github.com/sotayamashita/parse-migration-tool/blob/master/media/logo.png" width="400px">
</p>

[![npm](https://img.shields.io/npm/v/parse-migration-tool.svg?style=flat-square)](https://www.npmjs.com/package/parse-migration-tool)

**Parse Migration Tool** is [Parse](https://parse.com/) Migration CLI Tool

## Setup

Create `credencial.json` to send request:

```json
{
  "parse": {
    "applicationId": "<application id>",
    "masterKey": "<master key>"
  }
}
```

* **applicationId** - (Required) - Parse Application ID
* **masterKey** - (Required) - Parse Master Key (Not your Client Key or REST API Key)

## Install

```js
$ npm install -g parse-migration-tool
```

## Usage

**Help:**

```bash
  Usage: parse [options] [command]


  Commands:

    installation <file>         Retrieve the contents of an installation objects
    migration [options] <file>  Create files or Send request to import

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

**Growth Push**

**For Growth push, the script will generate CSV files which are named `ios.csv` and `android.csv`**. You can use it on Growth Push dashbord. They also provide [API](http://ja.growthpush.com/documents#restClientsApi) to import but it will take much time so I choose the way. If you would like to import yours with API, please create a [issue](https://github.com/sotayamashita/parse-migration-tool/issues/new?title=Growth%20Push%20-%20I%20would%20like%20to%20import%20device%20token%20with%20API).

```bash
$ parse migrate -s growthpush credential.json
$ ls
ios.csv andorid.csv
```


**OneSinal**

Before exporting data toOneSignal, please add credential for OneSignal on `credential.json` like below:

```json
{
  "parse": {
    "applicationId": "<application id>",
    "masterKey": "<master key>"
  },
  "oneSignal": {
    "appId": "<application id>"
  }
}
```

* **appId** - (Required) - Your OneSignal Application Key

**For OneSignal, the script will send a request to export device token**. Android developers, please read a [Urgent note for Parse Android Push users](https://onesignal.com/blog/important-note-for-android-parse-push-users/). Parse Channels will be imported as OneSignal tags.

```bash
$ parse migrate -s onesignal credential.json
```

## License

MIT © Sota Yamashita
