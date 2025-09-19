var stuff = require('./stuff')

console.log(stuff.counter(['1', '2', '4']))
console.log(stuff.pi)
console.log(stuff.adder(5, stuff.pi))

var events = require('events')

var myEmitter = new events.EventEmitter()

myEmitter.on('someEvent', function(mssg){
    console.log(mssg)
})

myEmitter.on('greet', function(name){
    console.log(`hello ${name}`)
})

myEmitter.emit('someEvent', 'event was emmitted')
myEmitter.emit('greet', 'montfort')