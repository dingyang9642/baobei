/**
 * @file demo页面
 * @author dingyang(dingyang9642@126.com)
 */

var React = require('react');
var commonPageStyle = require('../../component/widget/common/common.css');
var demoPageStyle = require('./demo.useable.css');

// 首页顶部标题栏部分
var HeaderElement = require('../../component/widget/header/header.jsx');
// 首页中间内容部分
var ContentElement = require('./content/content.jsx');
// 首页底部状态栏部分
var FooterElement = require('../../component/widget/footer/footer.jsx');

var demoComponent = React.createClass({
	getInitialState: function() {
		return {

		};
	},
	componentWillMount: function () {
        demoPageStyle.use();
    },
    componentWillUnmount: function() {
        demoPageStyle.unuse();
    },
    render: function() {
        return (
            <div className="home-box">
                <HeaderElement title='home'/>
                <ContentElement/>
                <FooterElement/>
            </div>
        );
    }
});
module.exports = demoComponent;