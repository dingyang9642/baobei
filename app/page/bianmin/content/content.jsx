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
                name: '公积金',
                url: '//m.anjuke.com'
            },
            {
                id: '2',
                icon: '',
                name: '公租房',
                url: ''
            },
            {
                id: '3',
                icon: '',
                name: '税后工资计算',
                url: ''
            }
        ];
    },

    render: function() {
        var self = this;
        var items = this.getBianminItems();
        return (
            <div className="content-box">
                <ul className="bianmin-items">
                    {
                        items.map(function (item, index){
                            return (<li className="bianmin-item" key={index}>
                                <a href={item.url} >{item.name}</a>
                            </li>)
                        })
                    }
                </ul>
            </div>
        );
    }
});
module.exports = contentComponent;