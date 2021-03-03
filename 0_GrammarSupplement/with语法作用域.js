function foo (obj) {
    with(obj) {
        name = 'zyt'
    }
    console.log(obj)
}

 var obj2 ={
    height: 178.1
}
// foo(obj1)
foo(obj2)
console.log(name)