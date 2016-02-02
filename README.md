<p align="center">
  <img src="https://github.com/sotayamashita/parse-migration-tool/blob/master/media/logo.png" width="400px">
</p>

[![npm](https://img.shields.io/npm/v/parse-migration-tool.svg?style=flat-square)](https://www.npmjs.com/package/parse-migration-tool)
[![license](https://img.shields.io/github/license/sotayamashita/parse-migration-tool.svg?style=flat-square)](https://github.com/sotayamashita/parse-migration-tool/blob/master/LICENSE)

**Parse Migration Tool** is [Parse](https://parse.com/) Migration CLI Tool

## Setup

Create `credencial.json` to send request:

```json
{
  "applicationId": "<application id>",
  "masterKey": "<master key>"
}
```

* **applicationId** - (Required) - Parse Application ID
* **masterKey** - (Required) - Parse Master Key (Not your Client Key or REST API Key)

## Install

```js
$ npm install -g parse-migration-tool
```

## Usage

```bash
  Usage: parse [options] [command]


  Commands:

    installation <file>         Retrieve the contents of an installation objects
    migration [options] <file>  Create files to import from another service

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

## Example

**Get installation objects:**

```bash
$ parse installation credential.json
```

**Create files or Send request to import:**

```bash
$ parse migration credential.json -s growthpush
```

* [x] [Growth Push](http://en.growthpush.com/) - (type: file) ... `-s or --service growthpush`
* [ ] [Amazon SNS](https://aws.amazon.com/sns/?nc1=h_ls) - (type: request) ... `-s or --service amazon`
* [ ] [OneSignal](https://onesignal.com/) - (type: request) ... `-s or --service onesignal`

## License

MIT © Sota Yamashita
