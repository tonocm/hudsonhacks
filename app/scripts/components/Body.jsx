// Body.jsx

'use strict';

var React = require('react');
var Description = require('./Description.jsx');
var ReactForm = require('./ReactForm.jsx');
var Body;

module.exports = Body = React.createClass({
 render: function() {
    return (
      <div className="body">
        <Description />
        <ReactForm />
      </div>
    );
  }
});