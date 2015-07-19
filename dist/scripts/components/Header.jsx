// Header.jsx

'use strict';

var React = require('react');
var Header;

module.exports = Header = React.createClass({
 render: function() {
    return (
      <div className="header">
        <div className="info">
            <h1>Eliminate hunger</h1>
        </div>
      </div>
    );
  }
});