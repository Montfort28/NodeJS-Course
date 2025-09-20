

setTimeout(() =>{
    console.log('time out logs after 4 secs')
    clearInterval(int)
}, 4000)

const int = setInterval(() =>{
    console.log('in the interval')
}, 1000)