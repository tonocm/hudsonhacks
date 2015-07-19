// Description.jsx

'use strict';

var React = require('react');
var Description;

module.exports = Description = React.createClass({
 render: function() {
    return (
        <div className="description">
            <div className="topic">
                <h1>Got Any Leftovers?</h1>
                <span>
                    Here at Hungryless, we are dedicated to helping you helping the less fortunate.
                    If you&#39;ve ever found yourself with some extra food after cooking and felt like it
                    should go to those who aren&#39;t in as good a place as you, then you&#39;ve come to the
                    right place.
                </span>
            </div>
            <div className="topic">
                <h1>How Does It Work?</h1>
                <span>
                    Here at Hungryless, we help you get your food to the people who need it. Just fill out the form
                    below, describing what food you have, how much of it is left, where you are, and how long you&#39;re
                    willing to wait.
                </span>
            </div>
        </div>
    );
 }
});