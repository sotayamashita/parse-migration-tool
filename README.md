# parse-migration-tool

> Parse Migration CLI Tool

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
    migration [options] <file>  Create config file to migrate

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

## Example

**Get installation objects:**

```bash
$ parse installation credencial.json
```

**Get file to migrate:**

```bash
# GrowthPush - http://en.growthpush.com/
$ parse migration credential.json -s growthpush
```

## License

MIT © Sota Yamashita
