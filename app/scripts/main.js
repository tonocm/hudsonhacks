'use strict';

var React = require('react');
var jQuery = require('jquery');
var Header = require('./components/Header.jsx');
var Body = require('./components/Body.jsx');
var Footer = require('./components/Footer.jsx');

React.render(
  <div className="container">
   <Header />
   <Body />
   <Footer />
  </div>,
  document.getElementById('content')
);
