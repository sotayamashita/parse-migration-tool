# parse-migration-tool

> Parse Migration CLI Tool

## Install

```js
$ npm install -g parse-migration-tool
```

## Usage

**1. Create credential json file:**

```
{
  "applicationId": "<application id>",
  "masterKey": "<master key>"
}
```

* **applicationId** - (Required) - Parse Application ID
* **masterKey** - (Required) - Parse Master Key (Not your Client Key or REST API Key)

**2. Get installation objects:**

```txt
  Usage: parse [options] [command]


  Commands:

    installation <file>         Retrieve the contents of an installation objects
    migration [options] <file>  Create config file to migrate

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

* **GrowthPush** - http://en.growthpush.com/

## License

MIT © Sota Yamashita
