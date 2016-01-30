# parse-migration-tool

> Parse Migration CLI Tool

## Install

```js
$ npm install -g parse-migration-tool
```

## Usage

Create credential json file:

```
{
  "applicationId": "<application id>",
  "masterKey": "<master key>"
}
```

* **applicationId** - (Required) - Parse Application ID
* **masterKey** - (Required) - Parse Master Key (Not your Client Key or REST API Key)

Get device tokens:

```js
$ parse client credential.json
```

```txt
  Usage: parse [options] [command]


  Commands:

    client <file>  Get device tokens

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

## License

MIT © Sota Yamashita
