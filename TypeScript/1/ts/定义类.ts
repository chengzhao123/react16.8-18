// 数组类型
var arr:Array<number> = []
arr = [12,21,3123]
// 数组类型
var arr1:[string,boolean,number] = ['123', false, 123]

// 元组类型
enum Flag {
	success = 1,
	error = -1
}
var f:Flag=Flag.success
console.log(f)

// any任意类型

//这个a其实是个Object的类型 但是在ts的定义中没有这个类型 所以要用的话就只能any类型
//var d2= document.getElementById('box')
// d2.style.color='red'  // 报错

//这个a其实是个Object的类型 但是在ts的定义中没有这个类型 所以要用的话就只能any类型
//var d1:any = document.getElementById('box')
//d1.style.color='red'  // 成功运行

// null类型
var v:undefined | null | number;  // |表示或者的意思 就是 v可能未定义 可能为空 也可能是数字类型
console.log(v) // 成功运行

// void 表示没有返回任何类型
function run():void {
	console.log('run')
}
run()

// 表示的是传入name的类型是字符串，传入sex的类型是数字，最后函数返回的类型是字符串
function getInfo1(name:string, sex:number):string {
	return `${name} + ${sex}`
}
console.log(getInfo1('程钊', 21))

// 可选参数
function getInfo2(name:string, sex?:number):string {  // 正确的方式 sex?:number 表示可以传sex也可以不传 同时可选参数必须配置到最后一个
	return `${name} + ${sex}`
}
console.log(getInfo2('程钊', 21))

// function getInfo3( sex?:number,name:string):string {  // 错误的方式，必须把 sex?:number放在后面
//	return `${name} + ${sex}`
//}
//console.log(getInfo3('程钊', 21))

// 默认参数
function getInfo(name:string, sex:number=20):string {  // 放在前后都无关系
	return `${name} + ${sex}`
}
console.log(getInfo('程钊'))

class Person {
	name:string;
	constructor(name:string){
		this.name = name;
	}
	getName():string {
		return this.name
	}
	setName(name:string):string{
    this.name = name;
    return name
	}
}
var p = new Person('张三')
console.log(p.getName())
console.log(p.setName('李四'))
console.log(p.getName())