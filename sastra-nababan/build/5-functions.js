"use strict";
function add(x, y, z, a = 0) {
    return x + y + a;
}
console.log(add(2, 3));
const addEx = function (x, y, z, a = 0) {
    return x + y + a;
};
const addArrow = (x, y, z, a = 0) => x + y + a;
const hello = (name) => console.log('hello ' + name);
function request(url, cb) {
    cb(url);
}
let fn = (str) => console.log(str);
request('http://typescriptlang.org', fn);
function submitContact(firstName, lastName, language = 'english', gender) {
    return {
        firstName,
        lastName,
        language,
        ...(gender && { gender }),
    };
}
let result2 = submitContact('Valen', 'Mayer', 'English', 'Female');
console.log(result2);
function fruitsCollection(item, ...restItems) {
    return item + ' ' + restItems.join(' ');
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado', 123, 'Abu');
console.log(fruits);
function CT(param) {
    return param;
}
function CT_generic(param) {
    return param;
}
console.log(CT_generic('Hello'));
console.log(CT_generic(123));
function CT_overload(param) {
    return param;
}
CT_overload('hello');
CT_overload(123);
