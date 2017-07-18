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
//var ContentElement = require('./content/content.jsx');
// 首页底部状态栏部分
var FooterElement = require('../../component/widget/footer/footer.jsx');

var GLOBAL_CONFIG = require('../..//conf/conf.js');
var projectName = GLOBAL_CONFIG.projectName;

var Router = require('react-router/lib/Router');
var browserHistory = require('react-router/lib/browserHistory');

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
                <Router routes={RootRoute} history={browserHistory}/>                
                <FooterElement/>
            </div>
        );
    }
});

var subRoutes = [
    {
        path: 'list',
        getComponent: function (nextState, cb) {
            require.ensure([], function (require) {
                cb(null, require('./list/list.jsx'));
            }, 'list');
        },
        onEnter: function () {
            
        },
        onLeave: function () {

        }
    },
    {
        path: 'view',
        getComponent: function (nextStatus, cb){
            require.ensure([], (require) => {
                cb(null, require('./view/view.jsx'))
            }, 'view');
        },
        onEnter: function (){

        },
        onLeave: function (){

        }
    },
    {
        path: '*',
        onEnter: function (nextState, replace) {
            // 如果是其他路由则跳转到首页
            replace('/' + projectName+'/bianmin');
        }
    }
];

var RootRoute = {
    childRoutes: [{
        path: './bianmin',
        component: bianminComponent,
        indexRoute: {
            getComponent: function (nextState, cb) {
                require.ensure([], function (require) {
                    cb(null, require('./content/content.jsx'));
                }, 'content');
            },
        },
        childRoutes: subRoutes
    }]
};

//module.exports = bianminComponent;