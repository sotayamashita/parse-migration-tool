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

### Help

```bash
  Usage: parse [options] [command]


  Commands:

    installation <file>         Retrieve the contents of an installation objects
    migration [options] <file>  Create files or Send request to import

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

### Migrate to Growth Push

> [Growth Push](http://en.growthpush.com/) is one of the biggest push notification platoform in Japan. Growth Push provides Push Notification's analyses and delivery services for Applications developers. - [relatedcode/ParseAlternatives](https://github.com/relatedcode/ParseAlternatives)

**For Growth push, the script will generate CSV files which are named `ios.csv` and `android.csv`**. You can use it on Growth Push dashbord. They also provide [API](http://ja.growthpush.com/documents#restClientsApi) to import but it will take much time so I choose the way. If you would like to import yours with API, please create a [issue](https://github.com/sotayamashita/parse-migration-tool/issues/new?title=Growth%20Push%20-%20I%20would%20like%20to%20import%20device%20token%20with%20API).

```bash
$ parse migrate -s growthpush credential.json
$ ls
ios.csv andorid.csv
```


### Migrate to OneSinal

> [OneSignal](https://onesignal.com) is a completely free push notification delivery service. We fund our product development through products offered to enterprise clients. - [relatedcode/ParseAlternatives](https://github.com/relatedcode/ParseAlternatives)

Before exporting data to OneSignal, please add credential for OneSignal on `credential.json` like below:

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

### Amazon Simple Notification Service (SNS)

> [Amazon Simple Notification Service (SNS)](https://aws.amazon.com/sns/) is a fast, flexible, fully managed publish-subscribe based messaging service for mobile and enterprise messaging that is used by several leading brands and startups to send billions of messages every day - [relatedcode/ParseAlternatives](https://github.com/relatedcode/ParseAlternatives)

Before exporting data to Amazon SNS, please add credential for Amazon SNS on `credential.json` like below:

```json
{
  "parse": {
    "applicationId": "<application id>",
    "masterKey": "<master key>"
  },
  "amazonSns": {
    "accessKeyId": "<accessKeyId>", 
    "secretAccessKey": "<secret access key>", 
    "region": "<region>"
  }
}
```

* **accessKeyId** - (Required)
* **secretAccessKey** - (Required)
* **region** - (Required) 

_[Read more about configuration](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html)_

```bash
$ parse migrate -s sns credential.json
```

## License

MIT © Sota Yamashita
