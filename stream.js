// STREAMS  --   start using data before it has finished

const fs = require('fs');

const readStream = fs.createReadStream('./docs/blogtxt3.txt',{ encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./docs/blogtxt2.txt');



readStream.on('error', (err) => {
    console.error('Error reading the file:',err);
});
// readStream.on('data',(chunk) => { 
//     console.log('---new chunk---');
//     console.log(chunk);
//     writeStream.write('\nNew Chunk\n');
//     writeStream.write(chunk);
   

// })

// console.log('Current working directory:',process.env.NODE_ENV);


//  console.log("2");



// piping

readStream.pipe(writeStream);
