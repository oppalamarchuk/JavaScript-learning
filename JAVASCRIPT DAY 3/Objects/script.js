// PART 1     DAY 2 OF LEARNING JS
//
// const product = {
//     name: 'socks',
//     price:1090
// };
// console.log(product);
// console.log(product.name);
// console.log(product.price);
//
// product.name='cotton socks';
// console.log(product.name);
//
// localStorage.setItem(product);
// ------------------------------------------



// PART 2     DAY 3 OF LEARNING JS
//
//PRACTISE 1

const prod = {
    name: 'socks',
    price:1090
};

console.log('hgfgfsdaf'.toUpperCase())

const obj1={
    m:'holo effect'
}
const obj2=obj1;

obj1.m = '1';


console.log(obj2.m)
obj2.m = '2';

console.log(obj1.m)

const obj3={
    m:'holo effect'
}
// console.log(obj3===obj1);
// console.log(obj2===obj1);
const obj4={
    m:'holo effect',
    price: 5000000,
    method(){
        console.log(9901)
    }
}
let {m,price} = obj4;
console.log(m,price);
obj4.method()
//------------------------------------------
//
//PRACTISE 2

const product={
    name:'basketball',
    price:2095,
    display(){
        console.log(`name:  ${this.name}`);
        console.log(`price: ${this.price}`);
    },
    increasePrice(cents){
        this.price+=cents;
    }
};
const product1={
    name:'ball',
    price:50000,
    display(){
        console.log(`name:  ${this.name}`);
        console.log(`price: ${this.price}`);
    },
    increasePrice(cents){
        this.price+=cents;
    }
};
function comparePrice(product__1,product__2) {
    if (product__1.price<product__2.price)
        console.log(`${product__1.name} is less expensive`);
    else
        console.log(`${product__2.name} is less expensive`);

};
function isSameProduct(product__1,product__2) {
    if (product__1.price === product__2.price && product__1.name === product__2.name )
        console.log(`Products are the same 
                     name:${product__1.name}
                     price:${product__1.price}`);
    else {
        console.log("Products are different:");
        console.log(`1 product name:${product__1.name} \n1 product price:${product__1.price}`);
        console.log(`2 product name:${product__2.name} \n2 product price:${product__2.price}`);
    }
};
product.display();
product.increasePrice(500);
product.display();
product['delivery-time']='330 days';
console.log(`delivery-time: ${product['delivery-time']}`);

comparePrice(product1,product);
isSameProduct(product1,product);
