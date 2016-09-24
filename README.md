[package-badge]: https://img.shields.io/badge/packages-by_me-blue.svg?style=flat-square
[package-link]:  https://github.com/search?utf8=%E2%9C%93&q=package%2Buser%3Asotayamashita&type=Repositories&ref=searchresults

# parse-migration-tool [![Packages By Me][package-badge]][package-link]

>  [Parse](https://parse.com/) Migration CLI Tool

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

There are multiple command-line options available:

```bash
  Usage: parse [options] [command]


  Commands:

    installation <file>         Retrieve the contents of an installation objects
    migrate [options] <file>    Create files or Send request to import

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

## License

MIT © Sota Yamashita
