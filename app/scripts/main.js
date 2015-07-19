// main.js
/** @jsx React.DOM */

'use strict';
var React = require('react');
var jQuery = require('jquery');
var Header = require('./components/Header.jsx');

React.render(
  <div className="container">
   <Header />
  </div>,
  document.getElementById('content')
);