const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const argPath = process.argv[3];
request(url, (error, response, body) => {
  if (error) {
    console.error(error)
    return
  }
  let size = body.length;
  fs.writeFile(argPath, body, err => {
    if (err) {
      console.error(err)
      return
    }
  })
  console.log(`Downloaded and saved ${size} bytes to ${argPath}`)
});



