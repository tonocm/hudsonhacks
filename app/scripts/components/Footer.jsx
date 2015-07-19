// Header.jsx

'use strict';

var React = require('react');
var Footer;

module.exports = Footer = React.createClass({
 render: function() {
    return (
      <div className="footer">
        <span>&copy; Team Visual Basic GUI
        </span>
        <span>Created at HudsonHack
        </span>
        <span>
            <a href="https://github.com/tonocm/hudsonhacks"><img src="../../images/git.png"/></a>
        </span>
      </div>
    );
  }
});