var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
require('backbone-react-component');

//Local Inports
var MenuCollection = require('../models/item-model.js');

//New Component
var DishItem = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  handleClick: function(item){
    this.props.cartCollection.add(item);
  },
  render: function(){

    return (
      <div className="entre-items">
        <Entres collection={this.props.entreCollection} onClick={this.handleClick} />
      </div>
    )
  }
});

var Entres = React.createClass({

  handleClick: function(item, e){
    e.preventDefault();
    this.props.onClick(item.attributes);
  },
  render: function(){
    var menuItems = this.props.collection.map(function(item){
      var bindItemClick = this.handleClick.bind(this, item);

      return (
        <div key={item.cid} className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">{item.get('name')}</a>
            </h4>
          </div>
          <div id="collapse2" className="panel-collapse collapse in">
            <div id="entres" className="panel-body">
              <p>{item.get('description')}</p>
              <p id="price">{item.get('price')}</p>
              <button type="button" className="btn btn-primary" onClick={bindItemClick} >
                <span className="add">Add</span>
              </button>
            </div>
          </div>
        </div>
      );
    }.bind(this));
    return (
      <div>

      </div>
    )
  }
})

//Exports
module.exports = {
  'DishItem': DishItem
}
