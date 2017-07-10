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
    /**
     * 获取小工具列表
     * @Author   dingyang   [dingyang@baidu.com]
     * @DateTime 2017-07-10
     * @return   {[type]}   [description]
     */
    getBianminItems: function() {
        return [
            {
                id: '1',
                icon: '',
                name: ''
            }
        ];
    },

    render: function() {
        return (
            <div className="content-box">
                <ul className="bianmin-items">
                    <div>便民小工具板块[敬请期待...]</div>
                </ul>
            </div>
        );
    }
});
module.exports = contentComponent;