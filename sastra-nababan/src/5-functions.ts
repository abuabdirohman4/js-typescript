/**
 * 1. function declaration, expression, arrow
 * 2. optional & default parameters
 * 3. rest parameter
 * 4. conditional type with union, generic, overlods
 */

/********** 1. Basic Function  ***********/
/* Function Declaration, Expession, Arrow
 */

// function declaration
function add(x: number, y: number, z?: number, a = 0): number {
    return x + y + a;
}
console.log(add(2, 3));

// function expression
const addEx = function (x: number, y: number, z?: number, a = 0): number {
    return x + y + a;
};

// arrow function
const addArrow = (x: number, y: number, z?: number, a = 0): number => x + y + a;

// function with no return value
const hello = (name: string): void => console.log('hello ' + name);

// function with callback
type Greeter = (message: string) => void;
function request(url: string, cb: Greeter): void {
    cb(url);
}

let fn = (str: string) => console.log(str);
request('http://typescriptlang.org', fn);

/********** 2. optional & default parameters  ***********/
/*
| parameters | required | default value |
| ---------- | -------- | ------------- |
| firstName  | Yes      |               |
| lastName   | Yes      |               |
| gender     | No       |               |
| languange  | No       | english       |
*/

type Contact = {
    firstName: string;
    lastName: string;
    gender?: string;
    language: string;
};

function submitContact(firstName: string, lastName: string, language = 'english', gender?: string): Contact {
    return {
        firstName,
        lastName,
        language,
        ...(gender && { gender }),
    };
}
// let result2 = submitContact('Valen', 'Mayer', 'English');
let result2 = submitContact('Valen', 'Mayer', 'English', 'Female');
console.log(result2);

/********** 3. Rest Parameter  ***********/

function fruitsCollection(item: string, ...restItems: (string | number)[]) {
    return item + ' ' + restItems.join(' ');
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado', 123, 'Abu');
console.log(fruits);

/********* 4. conditional type with union ***********/
/*
  - accept parameter either string or number
  - return either string or number
  - don't use `any`
*/

// solution 1
function CT(param: string | number): string | number {
    return param;
}

// solutin 2 - generic
// Type variable => deteksi type data dari caller
function CT_generic<T>(param: T): T {
    return param;
}

console.log(CT_generic<string>('Hello'));
console.log(CT_generic<number>(123));

// solutin 3 - overloading
function CT_overload(param: string): string;
function CT_overload(param: number): number;
function CT_overload(param: any): any {
    return param;
}

CT_overload('hello');
CT_overload(123);
// console.log(CT_overload(true));
