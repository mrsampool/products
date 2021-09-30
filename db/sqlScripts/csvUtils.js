// Libraries
const fs = require('fs');
const readline = require('readline');

async function readLines(){

  const filepath = '../starterData';
  const fileStream = fs.createReadStream(`${filepath}/photos.csv`);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl){
    let writeLine = line;
    if (writeLine[line.length - 1] !== `"`){
      if (line.indexOf('id,styleId,url,thumbnail_url') === -1){
        writeLine += `"`;
        console.log(`edited line: ${writeLine}\n`);
      }
    }
    await fs.appendFileSync(`${filepath}/photos-edited.csv`, `${writeLine}\n`, 'utf8', (err)=>{
      if(err){ console.log(err) }
    })
  }
}
readLines();