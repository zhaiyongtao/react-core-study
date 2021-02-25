// 生成奇函数的基本使用
function* foo() {
    yield 'hello';
    yield 'world';
}

const fooIt = foo(); // 生成器函数返回的Generator对象， 这才是我们想要
const fooIte = foo; // 这样是将生成器函数赋值给一个变量，并不是我想要的
console.log(fooIte) //[GeneratorFunction: foo]
console.log(fooIt)//Object [Generator] {}
// next() 方法返回的是一个对象，我们要想拿到想要的生成器函数中yield返回的值，我们需要获取他的value的属性
console.log(fooIt.next()) //{ value: 'hello', done: false }
console.log(fooIt.next()) //{ value: 'world', done: false } ，还需要直接一次next函数才能是生成器函数完全执行
console.log(fooIt.next()) //{ value: undefined, done: true }

console.log('********************************************************************************************')

// 生成器函数与Promise的结合使用

function* barGenerator() {
    const result =  yield new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('setTimeout函数')
            resolve('res')
            return 'res'; //为了给result赋值
        }, 0)
    })
    console.info('result', result)
}

const barIterx = barGenerator();

barIterx.next().value.then(res => {
    console.log(res)
    // 下面的next执行之后，result的结果是undefined
    barIterx.next() // 这个地方是为了输出result， const result =  yield... 这个是个赋值语句，属于从右到左的赋值，yield执行之后程序并没有完全结束，我们还需要继续执行next函数来完成赋值,
})
// 这就是为什么要调用两次next 才拿到result 的值
// console.log(barIterx.next()) // value: Promise { <pending> }, done: false }
// console.log(barIterx.next()) //{ value: undefined, done: true }

console.log('********************************************************************************************')

const barIntery = barGenerator()
barIntery.next().value.then(res => {
    console.log(res);
    barIntery.next(res) // result => res, result 被赋值，这是next函数的特性，会将next(arg)函数的参数传递到原有的生成器函数中
})