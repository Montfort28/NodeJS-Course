var counter = function(arr){
    return 'the array has '  +arr.length  +' elements'
}

var adder = function(a,b){
    return `the sum of the 2 numbers is ${a+b}`
}

var pi = 3.14

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi

}

