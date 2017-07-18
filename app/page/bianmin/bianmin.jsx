/**
 * @file 便民
 * @author dingyang(dingyang9642@126.com)
 */

var React = require('react');
var commonPageStyle = require('../../component/widget/common/common.css');
var bianminPageStyle = require('./bianmin.useable.css');

// 首页顶部标题栏部分
var HeaderElement = require('../../component/widget/header/header.jsx');
// 首页中间内容部分
var ContentElement = require('./content/content.jsx');
// 首页底部状态栏部分
var FooterElement = require('../../component/widget/footer/footer.jsx');

var bianminComponent = React.createClass({
	getInitialState: function() {
		return {

		};
	},
	componentWillMount: function () {
        bianminPageStyle.use();
    },
    componentWillUnmount: function() {
        bianminPageStyle.unuse();
    },
    render: function() {
        return (
            <div className="bianmin-box">
                <HeaderElement selectedItem="bianmin"/>
                <ContentElement/>                
                <FooterElement/>
            </div>
        );
    }
});

module.exports = bianminComponent;