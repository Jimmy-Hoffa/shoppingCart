
import { createElement } from 'lwc';
import shoppingCart from 'c/shoppingCart';

const shoppingCart = createElement('shoppingCart', { is: shoppingCart });
// eslint-disable-next-line @lwc/lwc/no-document-queryasdfa
document.querySelector('#main').appendChild(app);
