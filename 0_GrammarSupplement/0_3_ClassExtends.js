// 大多数浏览器的ES5实现之中，每一个对象都有proto属性，指向对应的构造函数的prototype属性，class作为构造函数的语法糖，同时有prototype属性和proto属性，因此同时存在两条继承链；
// （1）子类的proto属性，表示构造函数的继承，总是指向父类；
// （2）子类prototype属性的proto属性，表示方法的继承，总是指向父类的prototype属性；

class Person {
    constructor(name) {
        this.name = name;
        this.age = 12;
    }
    getName () {
        return this.name;
    }
    getAge () {
        return this.age
    }
}

// 区别类属性声明的方式
// class PersonA {
//     name;
//     age;
//     constructor(name) {
//         this.name = name;
//         this.age = 18;
//     }
//
//     getName () {
//         return this.name;
//     }
//     getAge () {
//         return this.age
//     }
// }

class Student extends Person {
    constructor() {
        super('zyt');
        this.studentNumber = '2019999999999'
    }

    // this.name 因为继承Person的原因所以可以直接引用到Person.prototype
    getStudentInfo() {
        super.getAge()
        console.info('stu age', super.getAge())
        return this.studentNumber + ',' + this.name
    }
}

class Teacher extends Person {
    constructor(name) {
        super(name);
        this.teacherLevel = 'HIGH'
        // super 作为对象时指向的是父类的原型对象（Person.prototype）
        // name属性是存在于类的实例对象中
        this.teacherName = super.name;  // this.teacherName => undefined
    }

    getTeacherInfo () {
        return this.teacherLevel + ',' + this.name + ',' +this.teacherName
    }
}


class OtherPeople extends Person {
    // 如果一个类扩展了另一个类并没有contructor，那么会自动生成如下contructor
    // 继承类中的构造函数必须调用 super（...），(!)并且在使用 this 之前执行它。
    // 当一个普通的构造函数运行时，它会创建一个空对象作为 this，然后继续运行。
    // 但是当派生的构造函数运行时，与上面说的不同，它指望父构造函数来完成这项工作
    // constructor(...args) {
    //     super(...args);
    // }
    getOtherPeopleAge () {
        return this.age;
    }
}
const  people = new Person('people')
const stu = new Student()
const tea = new Teacher('zyt')
const other = new OtherPeople()

console.info('stu', stu.getStudentInfo())
console.info('tea', tea.getTeacherInfo())
console.info('other', other.getOtherPeopleAge())

console.info(Student.__proto__) // [Function: Person], 实现属性继承 指向父类
console.info(Student.prototype) // Student {} 子类的原型
console.info(Student.prototype.__proto__) //Person {}, 实现方法继承  指向父类的原型
// const peopleA = new PersonA('peopleA')
// console.info('peopleName',people.getName())
// console.info('peopleAge',people.getAge())
// console.info('peopleAName',peopleA.getName())
// console.info('peopleAAge',peopleA.getAge())