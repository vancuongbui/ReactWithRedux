const x =3
function adding(a) {
    var f = (y) => y ** x
    return f(a)
}
var result = adding(10)

var myf = (y,z) => ({
    'first':y**x,
    'second':z**x
})
var result2 = myf(3,4)  

console.log(result)
console.log(result2.first)
console.log(result2.second)
