import { mount as cartMount } from 'cart/CartShow';
import { mount as productMount } from 'products/ProductsIndex';

console.log('COntainer loaded');

productMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));