const product = {
    name: 'socks',
    price:1090
};
console.log(product);
console.log(product.name);
console.log(product.price);

product.name='cotton socks';
console.log(product.name);

localStorage.setItem(product);
