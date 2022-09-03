# project-filemetadata

This is a Node.js (with Express.js) small app that takes file from user using multer and sends back JSON object with name, type and size of the file. File is stored in memory and once request is done memory will be freed.

## Example output

```json
{"name":"css-grid-poster.png","type":"image/png","size":1616679}
```

## [Try it](https://project-filemetadata.iotardis.repl.co)