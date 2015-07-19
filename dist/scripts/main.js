// main.js
/** @jsx React.DOM */

'use strict';
var React = require('react');
var jQuery = require('jquery');
var Header = require('./components/Header.jsx');
var App = require('./components/App');

React.render(
  <App />,
  document.getElementById('main')
);

