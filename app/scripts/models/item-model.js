var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

//Item Model
var MenuItem = Backbone.Model.extend({

});

//Menu Collection
var MenuCollection = Backbone.Collection.extend({
  model: MenuItem,

});

//Exports
module.exports = {
  'MenuItem': MenuItem,
  'MenuCollection': MenuCollection
}
