import faker from 'faker';

let products = '';

for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
}

document.querySelector('#dev-products').innerHTML = products;

// Context/Situation #1
// We are sunning this file in development isolation
// We are using our local index.html file 
// Which DEFINITELY has an element with an id of 'dev-products'
// We want to immediately render our app into the element

// Context/Situation #2
// We are sunning this file in development pr production
// through the CONTAINER app
// No GUARANTEE that an element with a id of 'dev-products' exist
// We DO NOT want to immediately render our app into the element