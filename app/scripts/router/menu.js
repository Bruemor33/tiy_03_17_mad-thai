var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

console.log("Hello World!");

//Local imports
var MenuCollection = require('./models/item-model.js');
var CartCollection = require('./models/cart.js');

var menu = new MenuCollection([
  {
    name: 'Pad Thai',
    price: '10',
    description: "Thailand's calling card to the rest of the culinary world, pad Thai doesn't need an introduction. There are an infinite number of variations on this timeless tradition, but usually noodles are dressed up with tofu, bean sprouts, onion, and the brilliant final touch: peanuts ground to near dust. Pad Thai is a diner-participation meal; you put on the finishing touches of fish sauce, sugar, chili powder, and crushed peanuts to suit your taste.",
    quantity: 0
  },
  {
    name: 'Tom Yam Goong',
    price: '12',
    description: "Lemongrass, lime leaves, galangal, and shallots provide the memorable smells, with chilis and fish sauce providing the kick. Substance comes in the form of jumbo shrimp (goong) and mushrooms. The flavour is a unique combination of spicy hot and sour and makes for an ideal start to a meal, or - when paired with rice - a worthy main dish.",
    quantity: 0
  },
  {
    name: 'Kuay Tiew',
    price: '13',
    description: "Noodles ' usually thin, occasionally broad ' are served up in a broth with just about any edible meat: pork, chicken, beef, duck, and seafood being the most popular.",
    quantity: 0
  },
  {
    name: 'Som Tam',
    price: '46',
    description: "Som tam ' spicy papaya salad ' comes from northeast Thailand, but it's reached near-cult status throughout the rest of the country. Slight regional differences in ingredients means placement on the sweet-or-sour scale may vary greatly between restaurants. Common to all recipes is shredded green papaya and a healthy dose of heat. Barbequed chicken and lumps of sticky rice are the perfect companions.",
    quantity: 0
  },
  {
    name: 'Gai Med Ma Moung',
    price: '1',
    description: "Roasted cashew nuts. Sweet soy sauce. Honey. Garlic. And, of course, chilis ' it would be Thai food without a little enjoyable pain. Three cheers for the clever soul that figured out nuts and chicken were a good mix. A dish this popular must be more than a little good. Phuket raises the standard with a vast supply of some of the world's best cashew nuts, and they're grown locally.",
    quantity: 0
  },
  {
    name: 'Geng Kheaw Wan Gai',
    price: '66',
    description: "So what gives green curry its colour? Green curry paste. Sorry, not an exciting answer, but it is an exciting dish. Of all the curries, and there’s plenty of them, the one that’s the colour of American money is among the spiciest. It’s also the least like Indian curry; Thailand has a way of making borrowed food distinctively Thai. The proof is in the coconut milk.",
    quantity: 0
  },
  {
    name: 'Tom Kha Gai',
    price: '25',
    description: "Possibly the world's most refreshing soup, tom kaa gai (boiled galangal chicken) combines coconut milk with lemongrass, galangal ' ginger's Asian sister ' and chicken. It's a sweet, tame twist on tom yam goong. On a table filled with delectable Thai dishes, tom kaa gai stands out; your spoon will return to this bowl time and again.",
    quantity: 0
  },
  {
    name: 'Kao Phad',
    price: '0',
    description: "Ah, good old fried rice. On first sight, kao phad appears to be little more than a big heap of rice; you call that a meal? But try it. Augmented with your choice of meat ' shrimp and chicken being the most popular ' and egg, onion, cilantro, garlic, and tomotoes, this is rice with hidden secrets. Spice to taste with chili sauce and enjoy.",
    quantity: 0
  },
])

var cartCollection = new CartCollection();

//Exports
module.exports = menu, cartCollection;
