var React = require('react');
var GLOBAL_CONFIG = require('./conf/conf.js');
var ReactDOM = require('react-dom');
var Router = require('react-router/lib/Router');
var browserHistory = require('react-router/lib/browserHistory');
var projectName = GLOBAL_CONFIG.projectName;

var App = React.createClass({
    render: function() {
        return (
            <div className="ecnu-page">
                {this.props.children}
            </div>
        );
    }
});

var subRoutes = [
    {
        path: 'bianmin',
        getComponent: function (nextState, cb) {
            require.ensure([], function (require) {
                cb(null, require('./page/bianmin/bianmin.jsx'));
            }, 'bianmin');
        },
        onEnter: function () {
            
        },
        onLeave: function () {

        }
    },
    {
        path: 'caijing',
        getComponent: function (nextState, cb) {
            require.ensure([], function (require) {
                cb(null, require('./page/caijing/caijing.jsx'));
            }, 'caijing');
        },
        onEnter: function () {
            
        },
        onLeave: function () {

        }
    },
    {
        path: 'shipin',
        getComponent: function (nextState, cb) {
            require.ensure([], function (require) {
                cb(null, require('./page/shipin/shipin.jsx'));
            }, 'shipin');
        },
        onEnter: function () {
            
        },
        onLeave: function () {

        }
    },
    {
        path: 'lvtu',
        getComponent: function (nextState, cb) {
            require.ensure([], function (require) {
                cb(null, require('./page/lvtu/lvtu.jsx'));
            }, 'lvtu');
        },
        onEnter: function () {
            
        },
        onLeave: function () {

        }
    },
    {
        path: 'demo',
        getComponent: function (nextState, cb) {
            require.ensure([], function (require) {
                cb(null, require('./page/demo/demo.jsx'));
            }, 'demo');
        },
        onEnter: function () {
            
        },
        onLeave: function () {

        }
    },
    {
        path: '*',
        onEnter: function (nextState, replace) {
            // 如果是其他路由则跳转到首页
            replace('/' + projectName);
        }
    }
];

var RootRoute = {
    childRoutes: [{
        path: '/' + projectName,
        component: App,
        indexRoute: {
            getComponent: function (nextState, cb) {
                require.ensure([], function (require) {
                    cb(null, require('./page/bianmin/bianmin.jsx'));
                }, 'bianmin');
            },
        },
        childRoutes: subRoutes
    }]
};

window.onload = function() {
    ReactDOM.render((
        <Router routes={RootRoute} history={browserHistory}/>
    ), document.querySelector('#ecnu-app'));
};