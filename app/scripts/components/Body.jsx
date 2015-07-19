// Body.jsx

'use strict';

var React = require('react');
var Description = require('./Description.jsx');
var Body;

module.exports = Body = React.createClass({
 render: function() {
    return (
      <div className="body">
        <Description />
        <div className="form">

        </div>
      </div>
    );
  }
});