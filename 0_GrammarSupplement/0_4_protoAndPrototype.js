// prototype属性，这个属性是一个指针，指向一个对象， 只有函数才有，指向xxxx.prototype

function fun () {
    console.log(fun.__proto__) // __proto__指向 Function 因为这个函数是由Funtion（js自带的构造函数）生成的
    console.log(fun.prototype) //
}
fun()

// 构造函数
// 构造函数标准为大写开头，通过new调用
function FunConstructor() {

}

// 对象实例
const funC = new FunConstructor()

console.log(funC.__proto__) // FunConstructor {}  实例对象的__proto__指向的是FunConstructor构造函数
console.log(FunConstructor.prototype) // FunConstructor {} ,原型对象