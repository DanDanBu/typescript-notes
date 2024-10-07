interface ILengthwise {
    length: number;
}

// How to fix this?
function identify<T>(arg: T): T {
    console.log(arg.length);
    return arg;
}


// K 一定要滿足是 T 的 property
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
  
// 直接讓 compiler 推斷型別
const value1 = getProperty({ foo: 'bar' }, 'foo');

// 或者將型別明確給入
interface IPayload {
  foo: string;
}
const value2 = getProperty<IPayload, 'foo'>({ foo: 'bar' }, 'foo');