class Animal {
    age;
    name; // 定义在类的实例对象里
    constructor(age, name) {
        this.age  = 12;
        this.name = name;
    }
    static sage = 123
    getAnimal() {
        console.info('getAnimal')
        console.info('getAnimal1',this.age)
    }
}
class Dog extends Animal{
    test = 13;
    constructor() {
        super(); //执行父类的构造函数
        console.info('this', this)
        console.info(this.age) // 12
        console.info({...super})
        this.dogAge = super.age
        console.info(this.dogAge) //undefined
        super.getAnimal() //getAnimal => Animal.prototype.getAnimal()
        this.getAnimal() //getAnimal
        console.info(super.sage) // undefined   => Animal.sage
        // super 作为对象指向的是父类的原型对象
    }
}

const  dog = new Dog()

// this的指向是在调用时决定的，和闭包是相反的