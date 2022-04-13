 
 
 // var [变量名] : [类型] = 值;



// 数字类型 number

let demo1:number = 123123

//字符串类型 string
let demo2:string = '123213'

//布尔类型 boolean
let demo3:boolean = true

// 数组类型
  // 1. 类型[ ] 
let arrs:number[] = [1, 2, 3, 4] // 数字数组 不允许出现其他数据类型
let arr1s:string[] = ['h', 'h', 'h'] // 字符串数组 
let arr2:any[] = [1, 'h', 'h', 3] //允许数组中出现任意类型
  // 2. 用接口表示数组，一般用于描述类数组
interface arr {
  [index: number]: number
}
let arr3: arr = [1, 2, 3, 4]
  // 3. Array<elementType> 用数组泛型表示数组
let arr4: Array<string> = ['bonjour', 'hello']
let arr5: Array<number> = [1, 2]
let arr6: Array<any> = [1, 2, 'hh']

//元组 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。
let x:[string, number];
x = ['Runoob', 1];    // 运行正常
//x = [1, 'Runoob'];    // 报错
console.log(x[0]);    // 输出 Runoob

// 枚举	enum 枚举类型用于定义数值集合
enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
console.log(c);    // 输出 2

//void	void用于标识方法返回值的类型，表示该方法没有返回值。
function hello():void {
    alert("Hello Runoob");
}

//null	null	表示对象值缺失。

//undefined	undefined	用于初始化变量为一个未定义的值

//never	never	never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。
let w: any = 4;
w.ifItExists();    // 正确，ifItExists方法在运行时可能存在，但这里并不会检查
w.toFixed();    // 正确

let arrayList: any[] = [1, false, 'fine'];
arrayList[1] = 100;

let x1: number;
x1 = 1; // 运行正确
// x1 = undefined;    // 运行错误
// x1 = null;    // 运行错误