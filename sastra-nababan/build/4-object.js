"use strict";
let product = {
    id: 'ID-1',
    productName: 'Macbook Air',
    price: 2000,
    note: '',
};
let product1;
product1 = {
    id: 'ID-1',
    productName: 'Macbook Air',
    price: 2000,
    note: '',
};
let product2;
let product3;
let product4;
product4 = {
    id: 'ID-1',
    productName: 'Macbook Pro',
    price: 2000,
    productDetail: {
        year: 2019,
        storage: 256,
    },
};
let user;
user = {
    id: 'U-1',
    name: 'Adi dodi',
    address: [
        {
            street: 'Jln. Setapak No.2',
            city: 'Jakarta',
        },
        {
            street: 'Jln. Lebar sekali no 10',
            city: 'Medan',
        },
    ],
};
let keyboard = {
    idCart: 'C1',
    dateOrdered: '2020-05-20',
    items: {
        p1: {
            id: 'P-1',
            name: 'Mechanical Keyboard',
            qty: 2,
        },
        p2: {
            id: 'P-2',
            name: 'USB Hub',
            qty: 1,
        },
    },
};
let fullName = {
    firstName: 'Abu',
    lastName: 'Abdirohman',
};
let { firstName, lastName } = fullName;
