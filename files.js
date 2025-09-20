const fs = require('fs')

//reading files
// fs.readFile('./doc/blog.txt', (err, data) =>{
//    if(err){
//     console.log(err)
//    }
//    console.log(data.toString())
// })

//writing files

fs.writeFile('./doc/blog.txt', 'other blog details added', () =>{
    console.log('file rewritten')
})