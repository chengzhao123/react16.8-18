// class Persons {
//   public name:string
//   constructor(v:any) {
//     this.name = v
//   }
//   run() {
//     console.log(`${this.name}在运动`)
//   }
// }
// var ps = new Persons('李四')
// ps.run()

/**
 * 静态方法
 */

//  class Person {
//    static age?:number = 21
//    public name:string | number
//    constructor(value:any='123') {
//      this.name = value
//    }
//    run() {
//      console.log(`${this.name}在运动`)
//    }
//    static print():void { /*静态方法没发直接调用类里面的属性*/
//       console.log('static 通过Person.print()的就是静态方法')
//     }
//  }
// var p = new Person()
// p.run()
// Person.print()
// console.log(Person.age)

/**
 * 多态
 */
class Student {
  fullName: string
  constructor(public first:any, public next:any, public last:any) {
    this.fullName = first + ' ' + next + '' + last
  }
}

interface Person {
  first: string;
  last:string
}

function getter(person: Person) {
  return `hello, ${person.first}  ${person.last}`
}
var user = new Student('j','a','asd')
console.log(getter(user))