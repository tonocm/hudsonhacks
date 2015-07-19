// Food.jsx

'use strict';

var React = require('react');
var Food;

module.exports = Food = React.createClass({

    getDefaultProps: function () {
        return {
            foodItems: ['../../images/food/apple-emoji.png',
                        '../../images/food/fries-emoji.png',
                        '../../images/food/bread-emoji.png',
                        '../../images/food/hotpot-emoji.png',
                        '../../images/food/donut-emoji.png',
                        '../../images/food/melon-emoji.png',
                        '../../images/food/pizza-emoji.png',
                        '../../images/food/rice-emoji.png',
                        '../../images/food/chicken-emoji.png',
                        '../../images/food/cookie-emoji.png',
                        '../../images/food/spaghetti-emoji.png',
                        '../../images/food/hamburger-emoji.png']
        };
    },

    componentDidMount: function () {
        var image = 0;
        var divStyle = this.refs.food.getDOMNode().style;
        var foodList = this.props.foodItems;

        setInterval(function() {
            divStyle.backgroundImage = "url(" + foodList[image] + ")";
            if (image < foodList.length - 1) {
                image = image + 1;
            }
            else {
                image = 0;
            }
        }, 3000); 
    },

    
    render: function() {
        return (
            <div className="food" ref="food">
            </div>
        );
    }
});