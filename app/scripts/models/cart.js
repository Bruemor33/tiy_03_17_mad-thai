var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

//Item Model
var CartItem = Backbone.Model.extend({
  'idAttribute': "id"
});

//Menu Collection
var CartCollection = Backbone.Collection.extend({
  model: CartItem
});

//Exports
module.exports = CartCollection;
