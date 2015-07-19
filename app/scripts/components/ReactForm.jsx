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
    location: t.Str,
    timespan: t.Str,
});


module.exports = ReactForm = React.createClass({

    submit: function() {

    },

    render: function() {
        return (
            <div className="form">
                <h1>Donate Now</h1>
                <Form type={Donation} ref="form"/>
                <button onClick={this.submit}>Feed Someone</button>
            </div>        
        );
    }
});