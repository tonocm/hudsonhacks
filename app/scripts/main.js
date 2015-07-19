// main.js
/** @jsx React.DOM */

'use strict';
var React = require('react');
var jQuery = require('jquery');
var Header = require('./components/Header.jsx');
var Body = require('./components/Body.jsx');

React.render(
  <div className="container">
   <Header />
   <Body />
  </div>,
  document.getElementById('content')
);