var React = require('react');
var footerPageStyle = require('./footer.useable.css');

var footerComponent = React.createClass({
	getInitialState: function() {
		return {

		};
	},
	componentWillMount: function () {
        footerPageStyle.use();
    },
    componentWillUnmount: function() {
        footerPageStyle.unuse();
    },
    render: function() {
        return (
            <div className="footer-box">
                
            </div>
        );
    }
});
module.exports = footerComponent;