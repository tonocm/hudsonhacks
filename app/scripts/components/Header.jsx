// Header.jsx

'use strict';

var React = require('react');
var Food = require('./Food.jsx');
var Header;

module.exports = Header = React.createClass({
 render: function() {
    return (
      <div className="header">
        <div className="logo">
            <Food />
            <div className="less">
            </div>
        </div>
        <div className="title">
            <h1>Hungerless</h1>
        </div>
      </div>
    );
  }
});