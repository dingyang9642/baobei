var React = require('react');
var headerPageStyle = require('./header.useable.css');
var browserHistory = require('react-router/lib/browserHistory');

var headerComponent = React.createClass({
	getInitialState: function() {
		return {
            selectedItem: 'bianmin' // 设置默认选中项
		};
	},
    getDefaultProps : function () {
        return {
            
        };
    },
	componentWillMount: function () {
        headerPageStyle.use();
    },
    componentWillUnmount: function() {
        headerPageStyle.unuse();
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
        this.setState({
            selectedItem: itemEnName
        });
    },
    render: function() {
        var self = this;
        var menuItems = this.getMenuList();
        var selectedItem = this.state.selectedItem;
        return (
            <section className='header-box'>
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
        );
    }
});
module.exports = headerComponent;