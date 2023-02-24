/**
 * 1. Object Literal
 * 2. Nested Object
 * 3. Nested, Object of Array
 * 4. Nested, Object of Object
 * 5. Object destructuring
 */

/**
 * 1. Object Literal
 */
/*
  {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    note: ""
  }
*/

// type inference, paling mudah tapi tidak disarankan karena ts nya gk kepake
let product = {
    id: 'ID-1',
    productName: 'Macbook Air',
    price: 2000,
    note: '',
};

// inline interface
let product1: {
    id: string;
    productName: string;
    price: number;
    note: string;
};
product1 = {
    id: 'ID-1',
    productName: 'Macbook Air',
    price: 2000,
    note: '',
};

// interface
interface Product1 {
    // type Product1 = {
    id: string;
    productName: string;
    price: number;
    note: string;
}

let product2: Product;
let product3: Product;

/**
 * 2. Nested Object
 */
/*
    {
      id: "ID-1",
      productName: "Macbook Pro",
      price: 2000,
      productDetail: {
        year: 2019,
        storage: 256
      }
    }
*/

interface Item {
    id: string;
    productName: string;
    price: number;
    productDetail: ItemDetail;
}
interface ItemDetail {
    year: number;
    storage: number;
}

let product4: Item;
product4 = {
    id: 'ID-1',
    productName: 'Macbook Pro',
    price: 2000,
    productDetail: {
        year: 2019,
        storage: 256,
    },
};

/**
 * 3. Nested, Array of Object
 */
/*
    {
      id: "U-1",
      name: "Adi dodi",
      address: [
        {
          street : "Jln. Setapak No.2",
          city: "Jakarta"
        },
        {
          street: "Jln. Lebar sekali no 10",
          city: "Medan"
        }
      ]
    }
*/

interface User {
    id: string;
    name: string;
    address: { street: string; city: string }[];
    // address: Array<Address>;
}

let user: User;
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

/**
 * 4. Nested, Object of Object
 */
/*
    {
      idCart: "C1",
      dateOrdered: "2020-05-20",
      items: {
        p1 :{
          "id": "P-1",
          "name": "Mechanical Keyboard",
          "qty": 2
        },
        p2 :{
          "id": "P-2",
          "name": "USB Hub",
          "qty": 1
        },
      }
    }
*/

interface Cart {
    idCart: string;
    dateOrdered: string;
    items: {
        [key: string]: CartItem;
    };
}
interface CartItem {
    id: string;
    name: string;
    qty: number;
}

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

/**
 * 5. Object Destructuring
 */

/*
  let fullName = {
    firstName : "Sastra",
    lastName : "Nababan"
  }
  let {firstName, lastName} = fullName
*/

let fullName = {
    firstName: 'Abu',
    lastName: 'Abdirohman',
};

// inline interface
let { firstName, lastName }: { firstName: string; lastName: string } = fullName;
