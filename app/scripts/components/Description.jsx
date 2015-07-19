// Description.jsx

'use strict';

var React = require('react');
var Steps = require('./Steps.jsx')
var Description;

module.exports = Description = React.createClass({
 render: function() {
    return (
        <div className="description">
            <div className="topic">
                <h1>Got Any Leftovers?</h1>
                <span>
                    Here at Hungerless, we are dedicated to helping you helping the less fortunate.
                    If you&#39;ve ever found yourself with some extra food after cooking and felt like it
                    should go to those who aren&#39;t in as good a place as you, then you&#39;ve come to the
                    right place.
                </span>
            </div>
            <div className="topic">
                <h1>How Does It Work?</h1>
                <Steps />
            </div>
        </div>
    );
 }
});