import faker from 'faker';

const monut = el => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
};

// Context/Situation #1
// We are sunning this file in development isolation
// We are using our local index.html file 
// Which DEFINITELY has an element with an id of 'dev-products'
// We want to immediately render our app into the element
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');

    // Assuming our container doesnt have an element with id 'dev-products...'
    if (el) {
        // we are probably running in isolation
        monut(el);
    }
}

// Context/Situation #2
// We are sunning this file in development pr production
// through the CONTAINER app
// No GUARANTEE that an element with a id of 'dev-products' exist
// We DO NOT want to immediately render our app into the element
export { monut };
