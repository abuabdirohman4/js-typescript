// ### Exercises :
// 1. Convert all JavaScript Types to TypeScript

let a; // undefined
let b: boolean;
b = true; // boolean

let c: number; // number
c = 1;

let d: string; // string
d = 'hello';

let e: bigint; // big int (starting ES2020)
e = 100n;

let f: symbol; // symbol  (starting ES2015)
f = Symbol('Sym');

// Penjelasan detil di eps 5
let g: () => void; // function
g = function () {
    return null;
};

let h: null; // null ( special primitive )
h = null;

// Penjelasan detil di eps 4
//let i: {};                        // Object Literal
let i: Record<string, unknown>; // Record<string, unknown>;

// Penjelasan detil di eps 3
// let j:Array<string>;                // array .map .push .pop
let j: [];
j = [];

// Penjelasan detil di eps 4
class Product {
    // class
    //...
}
let k = new Product();

let z: any;
z = 123;
z = 'string';
z = [1, 2, 3];
