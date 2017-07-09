var React = require('react');
var contentPageStyle = require('./content.useable.css');

var contentComponent = React.createClass({
	getInitialState: function() {
		return {

		};
	},
	componentWillMount: function () {
        contentPageStyle.use();
    },
    componentWillUnmount: function() {
        contentPageStyle.unuse();
    },
    render: function() {
        return (
            <div className="content-box">
                <div className="demo-part demo-part1">第一部分</div>
                <div className="demo-part demo-part2">第二部分</div>
                <div className="demo-part demo-part3">第三部分</div>
                <div className="demo-part demo-part4">第四部分</div>
                <div className="demo-part demo-part5">第五部分</div>
            </div>
        );
    }
});
module.exports = contentComponent;