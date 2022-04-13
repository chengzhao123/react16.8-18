// 类型断言 就是还不确定类型的时候就访问其中一个类型的属性或方法
// 表示的方法1 <类型> 值   2 值 as <类型>

/// 1 <类型> 值
var aa = '1';
var bb:number = <number> <any> aa // 这里事先定义的bb是number数字类型 但是后面就强制转换成了 number数字类型和any任意类型 如果不转换的话就匹配不上
console.log(bb)

// 2 值 as <类型>
var someValue: any = "this is a string";
// '尖括号'语法：<类型>值
// var strLength: number = (<string> someValue).length;
// 'as'语法：值 as 类型
var strLength: number = (someValue as string).length; // 把someValue的any任意类型转换车成了string字符串类型
console.log(strLength)
