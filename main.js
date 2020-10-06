// Create directory called fs-try

// - Using fs module:
const fs = require('fs');
// - create a directory called content using fs method and it should log 'content folder created'
fs.mkdir('Auth', (err) =>{
    if (err) return console.log(err);

    console.log('content folder created')
});
// - create a file using fs method called randomText.txt that lives outside the content directory
fs.writeFile('./randomText.txt', 'data in the file',(err)=>{
    if(err) return console.log(err)
    console.log('randomtext.txt created');

});
// - randomText.txt should be created using fs method and given just a short string of any data you want to put in it, using fs method
const reader = fs.readFileSync('./randomText.txt', 'utf8',(err, info)=>{
    if (err) return console.log('Something went wrong');
    console.log(info)
});

// - when you create the randomText.txt file you should also log 'randomtext.txt created' in the terminal.
// - write the randomText.txt data to a new file called verbage.txt inside the content folder and log 'verbage.txt created'
fs.writeFile('./verbage.txt', reader,(err)=>{
    if(err) return console.log(err)
    console.log('verbage.txt created');

});
// - Now create a separate setTimeout function that after 7 seconds deletes the content directory
setTimeout(()=> {
    fs.rmdir('./Auth', (err) => {
        if(err) return console.log(err)

        console.log('deletes the content directory')
    })
}, 7000)
