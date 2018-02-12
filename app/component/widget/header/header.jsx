var React = require('react');
var headerPageStyle = require('./header.useable.css');
var GLOBAL_CONFIG = require('../../../conf/conf.js');
var browserHistory = require('react-router/lib/browserHistory');
var projectName = GLOBAL_CONFIG.projectName;

var headerComponent = React.createClass({
	getInitialState: function() {
		return {
            selectedItem: 'bianmin' // 设置默认选中项
		};
	},
    getDefaultProps : function () {
        return {
            selectedItem: 'bianmin' // 设置默认选中项,同state中保持一致
        };
    },
	componentWillMount: function () {
        headerPageStyle.use();
    },
    componentWillUnmount: function() {
        headerPageStyle.unuse();
    },
    componentDidMount: function () {
        this.setDefaultSelectedItem();
    },
    /**
     * 获取菜单栏列表list
     * @return {[type]} [description]
     */
    getMenuList: function() {
        return [{
            enName: 'bianmin',
            cnName: '便民'
        }, {
            enName: 'caijing',
            cnName: '财经'
        }, {
            enName: 'shipin',
            cnName: '视频'
        }, {
            enName: 'lvtu',
            cnName: '旅途'
        }];        
    },
    handleMenuItemClick: function(itemEnName) {
        var selectedItem = this.state.selectedItem;
        if (itemEnName === selectedItem) {return;}
        var locationPathName = (itemEnName === 'bianmin') ? ('/' + projectName) : ('/' + projectName + '/' + itemEnName);
        browserHistory.replace(locationPathName);
    },
    /**
     * 根据不同页面传入参数产出默认选中项
     * @Author   dingyang   [dingyang9642@126.com]
     * @DateTime 2017-07-10
     */
    setDefaultSelectedItem: function() {
        var selectedItem = this.props.selectedItem;
        this.setState({
            selectedItem: selectedItem
        });
    },

    render: function() {
        var self = this;
        var menuItems = this.getMenuList();
        var selectedItem = this.state.selectedItem;
        return (
            <section className='header-box'>
                <section className='menu-box'>
                    <ul className='header-items'>
                        {
                            menuItems.map(function(menuItem, index) {
                                var itemEnName = menuItem.enName;
                                var itemCnName = menuItem.cnName;
                                var itemSelectedClassName = (selectedItem === itemEnName) ? 'header-item-selected' : '';
                                return (<li onClick={self.handleMenuItemClick.bind(self, itemEnName)} key={index} className={'header-item item-' + itemEnName + ' ' + itemSelectedClassName}>{itemCnName}</li>)
                            })
                        }
                    </ul>
                </section>
                <section className='menu-box-bg'></section>
            </section>
        );
    }
});
module.exports = headerComponent;