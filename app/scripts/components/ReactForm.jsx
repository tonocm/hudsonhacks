// React-Form.jsx

'use strict';

var React = require('react');
var t = require('tcomb-form');
var Form = t.form.Form;
var ReactForm;

var Donation = t.struct({
    name: t.maybe(t.Str),
    food: t.Str,
    allergens: t.maybe(t.Str),

})


module.exports = ReactForm = React.createClass({
 render: function() {
    return (
        <div className="form">
        </div>
    );
 }
});