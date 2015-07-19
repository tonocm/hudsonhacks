// Steps.jsx

'use strict';

var React = require('react');
var Steps;

module.exports = Steps = React.createClass({
 render: function() {
    return (
            <div className="show-dont-tell">
                <div className="step">
                    <div className="image cooking">
                    </div>
                    <div className="step-desc">
                        <span className="step-count">Step 1:</span>
                        <span>Cook yourself a delicious meal.</span>
                    </div>
                </div>
                <div className="step">
                    <div className="image sweat">
                    </div>
                    <div className="step-desc">
                        <span className="step-count">Step 2:</span>
                        <span>Find yourself with too much food.</span>
                    </div>
                </div>
                <div className="step">
                    <div className="image computer">
                    </div>
                    <div className="step-desc">
                        <span className="step-count">Step 3:</span> 
                        <span>Fill out the form at the bottom of this page.</span>
                    </div>
                </div>
                <div className="step">
                    <div className="image envelope">
                    </div>
                    <div className="step-desc">
                        <span className="step-count">Step 4:</span> 
                        <span>We send out a message to those in need.</span>
                    </div>
                </div>
                <div className="step">
                    <div className="image phone">
                    </div>
                    <div className="step-desc">
                        <span className="step-count">Step 5:</span> 
                        <span>Once we find a match, you get notified.</span>
                    </div>
                </div>
                <div className="step">
                    <div className="image meetup">
                    </div>
                    <div className="step-desc">
                        <span className="step-count">Step 6:</span> 
                        <span>You two meet up and share your food.</span>
                    </div>
                </div>
                <div className="step">
                    <div className="image awesome">
                    </div>
                    <div className="step-desc">
                        <span className="step-count">Step 7:</span> 
                        <span>Feel awesome about yourself.</span>
                    </div>
                </div>
            </div>
    );
  }
});