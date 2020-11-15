import faker from 'faker';

const mount = el => {

    const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

    el.innerHTML = cartText;
};

// Context/Situation #1
// We are sunning this file in development isolation
// We are using our local index.html file 
// Which DEFINITELY has an element with an id of 'dev-products'
// We want to immediately render our app into the element
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dcart-dev');

    // Assuming our container doesnt have an element with id 'dev-products...'
    if (el) {
        // we are probably running in isolation
        mount(el);
    }
}

// Context/Situation #2
// We are sunning this file in development pr production
// through the CONTAINER app
// No GUARANTEE that an element with a id of 'dev-products' exist
// We DO NOT want to immediately render our app into the element
export { mount };

