var React = require('react');
var GLOBAL_CONFIG = require('../../../conf/conf.js');
var contentPageStyle = require('./content.useable.css');

var contentComponent = React.createClass({
	getInitialState: function() {
		return {
            articles: []
		};
	},
	componentWillMount: function () {
        contentPageStyle.use();
        this.getArticles(1); // 初始化获取第一页数据
    },
    componentWillUnmount: function() {
        contentPageStyle.unuse();
    },
    /**
     * 获取文章
     * @Author   dingyang   [dingyang@baidu.com]
     * @DateTime 2017-07-17
     * @return   {[type]}   [description]
     */
    getArticles: function(pageNum) {
        var _this = this;
        $.ajax({
            type: 'GET',
            url: GLOBAL_CONFIG.requestUrl.wxArticleUrl,
            data: {
                type: 'lvtu',
                pageNum: pageNum,
                pageSize: 10
            },
            dataType: 'json',
            success: function(data) {
                _this.handleArticleResult(data);
            },
            error: function(xhr, type) {
                
            }
        })
    },

    /**
     * 对数据查询结果进行处理
     * @Author   dingyang   [dingyang@baidu.com]
     * @DateTime 2017-07-17
     * @param    {[type]}   data                 [description]
     * @return   {[type]}                        [description]
     */
    handleArticleResult: function(data) {
        var _this = this;
        if (data.resultCode === '0') {
            var articles = data.result.articles;
            _this.setState({
                articles: _this.state.articles.concat(articles)
            });
        } else {

        }
    },
    /**
     * 返回结果异常处理
     * @Author   dingyang   [dingyang@baidu.com]
     * @DateTime 2017-07-17
     * @return   {[type]}   [description]
     */
    handleArticleResultError: function() {

    },

    /**
     * 点击每一项条状文章地址
     * @Author   dingyang   [dingyang@baidu.com]
     * @DateTime 2017-07-17
     * @param    {[type]}   articleUrl           [description]
     * @return   {[type]}                        [description]
     */
    handleArticleItemClick:function(articleUrl) {
        window.location.href = articleUrl;
    },

    render: function() {
        var _this = this;
        var articles = _this.state.articles;
        return ( < div className = "content-box" >
            <div className = "articles-container">{
                articles.map(function(item, index){
                    var articleTitle = item.title;
                    var articleUrl = item.url;
                    var articleThumb = item.thumb_nail;
                    var articleDesc = item.abstract;
                    var articleWXPublicNum = item.wechat_number;
                    return (<div className="article-item" onClick={_this.handleArticleItemClick.bind(_this, articleUrl)} key={index}>
                        <div className="article-item-l">
                            <img className="article-item-l-img" src={"http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=" + articleThumb}/>
                        </div>
                        <div className="article-item-r">
                            <span className="article-item-title">{articleTitle}</span>
                            <span className="article-item-desc">{articleDesc}</span>
                            <span className="article-item-wx-public-num">{articleWXPublicNum}</span>
                        </div>
                    </div>);
                })
            }</div>
            < /div>
        );
    }
});
module.exports = contentComponent;