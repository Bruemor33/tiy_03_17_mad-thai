var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');

//Local Inports
var menu = require('./menu.js');
var cartCollection = require('./menu.js');
var DishItem = require('./../components/item-component.js');



var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "checkout": "checkout"
  },

  index: function(){
    this.current= "";
    ReactDOM.render (
      <DishItem entreCollection={menu} router={this} />,
      $('#accordion')[0]
    );
  }
});

//Exports
module.exports = {
  Router: Router
}
