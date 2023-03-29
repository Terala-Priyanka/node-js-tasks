const events = require('events');
const fs = require('fs');
// const readline = require('readline');
const csv=require('csvtojson');

const csvFilePath='csv/nodejs-hw1-ex1.csv';

csv()
.fromFile(csvFilePath)
.then((arr)=>{
  arr.map(obj => {
    fs.appendFile('output/nodejs-hw1-ex2.txt', JSON.stringify(obj)+'\n', (err) => {
      if(err) {
          console.log(err);
      }
    });
  });
});

/*
(async function processLineByLine() {
    // https://geshan.com.np/blog/2021/10/nodejs-read-file-line-by-line/
    try {
        const rl = readline.createInterface({
            input: fs.createReadStream(csvFilePath),
            crlfDelay: Infinity
        });

        rl.on('line', async (line) => {
          console.log(typeof line);
          console.log(`Line from file: ${line}`);
        });

        await events.once(rl, 'close');

        console.log('Reading file line by line with readline done.');
    } catch(err) {
        console.error(err);
    }
})();
*/
