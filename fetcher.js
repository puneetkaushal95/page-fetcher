const fs = require('fs');
const request = require('request');
const url = process.argv[2];

const savePath = process.argv[3];

request(url, (error, response, body) => {
  
  const content = body;
  fs.writeFile(savePath, content, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
    console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${savePath}`);
  })
});