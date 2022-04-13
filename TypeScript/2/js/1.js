"use strict";
// /**
//  * es5 中定义类的方法
//  */
// // function Person (name) {
// //   this.name = name
// //   this.run = function() {
// //     console.log(this.name + '在运动')
// //   }
// // }
// // var p = new Person('王五')
// // console.log(p.run())
// /**
//  * ts和es6 中定义类的方法
//  */
// //  class Person{
// //    name:string; // 属性 前面省略了public关键字
// //    constructor(n:string){ // 构造函数 实例化类的时候触发
// //     this.name = n
// //    }
// //    run():void {
// //      console.log(this.name)
// //    }
// //  }
// //  var p = new Person('白六')
// // p.run()
// /**
//  * ts
//  */
// // class Person2{
// //   name:string // 属性 前面省略了public关键字
// //   constructor(name:string){ // 构造函数 实例化类的时候触发
// //    this.name = name
// //   }
// //   setName(v:string):void{
// //     this.name = v
// //   }
// //   getName():string{
// //     return this.name
// //   }
// // }
// // var p2 = new Person2('谢八')
// // console.log(p2.getName())
// // p2.setName('赵千')
// // console.log(p2.getName())
// /**
//  * ts中主要是使用 extends 和 super 关键词来进行定义类
//  */
// // class Person{
// //   name: string
// //   constructor(value:string) {
// //     this.name = value
// //   }
// //   run():string{
// //     return `${this.name}在吃饭`
// //   }
// // }
// // var p = new Person('皇子')
// // console.log(p.run())
// // class web extends Person{
// //   constructor(name:string) {
// //     super(name) // 初始化父类的构造函数
// //   }
// // }
// // var w = new web('苟九')
// // console.log(w.run())
// // class Http{
// //   see({a,b,c,d}:any):string {
// //     return `返回的数字是${a}，${b},${c},${d}`
// //   }
// // } 
// // class Look extends Http{
// //   aa():string {
// //    return this.see({a:2,b:3,c:4,d:5})
// //   }
// // }
// // var p = new Look()
// // console.log(p)
// // class Person{
// //   name:string
// //   constructor(value:string){
// //     this.name = value
// //   }
// //   runs():string{
// //     return `${this.name}没在工作`
// //   }
// // }
// // class web extends Person{
// //   constructor(c:string){
// //     super(c)
// //   }
// //   run():string{
// //     return `${this.name}正在工作`
// //   }
// // }
// // var p = new web('张三')
// // console.log(p.runs()) // 张三没在工作 // 如果web里面没用runs方法的话 就会调用Person里面的runs方法
// // console.log(p.run())  // 张三正在工作
// /**
//  * 类里面的修饰符 typescript里面定义属性的时候给我们提供了 三种修饰符
//  * 属性如果不加修饰符 默认就是公用的 public
//  */
//  /**
//   * public :公用 在类里面 子类，类外面都可以访问
//   * protected :保护 在类里面 子类可以访问 类外面不可以访问
//   * private :私有 在类里面可以访问 字类和类外面不可以访问
//   */
// // public :公用 在类里面 子类，类外面都可以访问
// //  class Person{
// //    public name:string  // 相当于 name:string
// //    constructor(v:string){
// //      this.name = v
// //    }
// //    run():string{
// //      return `${this.name}正在运动`
// //    }
// //  }
// //  class web extends Person{
// //    constructor(name:string){
// //      super(name)
// //    }
// //    run():string{
// //      return `${this.name}正在运动--子类`
// //    }
// //  }
//  //var p = new web('李四')
//  //console.log(p.run()) // 李四正在运动--子类
// //  var p1 = new Person('王五')
// //  console.log(p1.name) // 王五
// // protected :保护 在类里面 子类可以访问 类外面不可以访问
//  class Person{
//    protected name:string  // 相当于 name:string
//    constructor(v:string){
//      this.name = v
//    }
//    runs():string{
//      return `${this.name}正在运动`
//    }
//  }
//  class web extends Person{
//    constructor(name:string){
//      super(name)
//    }
//    run():string{
//      return `${this.name}正在运动--子类`
//    }
//    work():string{
//      return `${this.name}在看书`
//    }
//  }
//  var p = new web('李四')
//  console.log(p.work())  // 李四在看书
//  console.log(p.runs())  // 李四在看书
