// React-Form.jsx

'use strict';

var React = require('react');
var t = require('tcomb-form');
var Form = t.form.Form;
var ReactForm;
var Donation = t.struct({
    name: t.maybe(t.Str),
    phone: t.Str,
    food: t.Str,
    servings: t.Str,
    allergens: t.maybe(t.Str),
    location: t.Str,
    timespan: t.Str,
});


module.exports = ReactForm = React.createClass({

    submit: function() {
        var xmlhttp = new XMLHttpRequest();
        var data = {"name": "Andy Powell", "foodName": "Chocolate Chip Cookies","servings": 1,"location": "156 5th Avenue, New York, NY", "allergies": []};
        xmlhttp.addEventListener('load', function() {
            alert(xmlhttp.responseText);
        }, false);
        xmlhttp.open("POST","http://localhost:3000/donations",true);
        xmlhttp.setRequestHeader("Content-type","application/json");
        xmlhttp.send(JSON.stringify(data));
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