var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');

//Local Inports
var MenuItem = require('../models/item-model.js').MenuItem;
var MenuCollection = require('../models/item-model.js').MenuCollection;

//New Component
var DishItem = React.createClass({

});

//Exports
module.exports = {
  'DishItem': DishItem
}
