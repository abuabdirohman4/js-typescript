// 2. Function Type

function sum(a: number, b: number): number {
    // validasi
    return a + b;
    // return '12';
}

function sumTanpaReturn(a: number, b: number): void {
    // return a + b;
}

let arg1 = 4;
let arg2 = 5;
let result = sum(arg1, arg2);
console.log(result);
