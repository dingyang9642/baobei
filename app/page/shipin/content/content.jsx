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
                <div>视频见闻[敬请期待...]</div>
            </div>
        );
    }
});
module.exports = contentComponent;