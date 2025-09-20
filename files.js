const fs = require('fs')

//reading files
// fs.readFile('./doc/blog.txt', (err, data) =>{
//    if(err){
//     console.log(err)
//    }
//    console.log(data.toString())
// })

//writing files

// fs.writeFile('./doc/blog.txt', 'other blog details added', () =>{
//     console.log('file rewritten')
// })

//directories
// if(!fs.existsSync('./assets')){
//   fs.mkdir('./assets', (err) =>{
//     if (err) {
//         console.log(err)
//     }
//     console.log('folder created')
// })
// } else{
//     fs.rmdir('./assets', (err) =>{
//          if (err) {
//             console.log(err)
//          }
//          console.log('folder deleted')
//     })
// }

//deleting files
if(fs.existsSync('./doc/deleteMe.txt')){
    fs.unlink('./doc/deleteMe.txt', (err) =>{
       if(err){
        console.log(err)
       }
       console.log('file deleted successfully')
    })
}else{
    fs.link('./doc/deleteMe.txt', (err) =>{
        if(err){
            console.log(err)
        }
        console.log('file created successfully')
    })
}