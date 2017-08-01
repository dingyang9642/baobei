var React = require('react');
var GLOBAL_CONFIG = require('../../../conf/conf.js');
var UtilTools = require('../../../component/widget/util/util.jsx');
var contentPageStyle = require('./content.useable.css');

var contentComponent = React.createClass({
    getInitialState: function() {
        return {
            articles: [],
            loadMoreText: '小主，正在努力加载中...' //页面底部‘加载更多文案’
        };
    },
    componentWillMount: function () {
        contentPageStyle.use();
        this.isInRequesting = false;
        this.isHasMoreArticles = true;
        this.initPageNum = 1;
        this.getArticles(this.initPageNum); // 初始化获取第一页数据
    },
    componentWillUnmount: function() {
        contentPageStyle.unuse();
    },
    componentDidMount: function() {
        this.initWindowScrollEvent();
    },
    /**
     * 获取文章
     * @Author   dingyang   [dingyang@baidu.com]
     * @DateTime 2017-07-17
     * @return   {[type]}   [description]
     */
    getArticles: function(pageNum) {
        var _this = this;
        if(_this.isInRequesting) return;
        _this.isInRequesting = true;
        $.ajax({
            type: 'GET',
            url: GLOBAL_CONFIG.requestUrl.wxArticleUrl,
            data: {
                type: 'caijing',
                pageNum: pageNum,
                pageSize: 10
            },
            dataType: 'json',
            success: function(data) {
                _this.handleArticleResult(data);
            },
            error: function(xhr, type) {
                
            },
            complete: function(xhr, status) {
                _this.isInRequesting = false;
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
            var pagination = data.result.pagination;
            _this.setState({
                articles: _this.state.articles.concat(articles)
            });
            _this.handleLoadMoreTips(pagination);
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

    handleLoadMoreTips: function(pagination) {
        var _this = this;
        var pageNum = pagination.pageNum;
        var pageSize = pagination.pageSize;
        var totalCount = pagination.totalCount;
        var maxPage = Math.ceil(totalCount / pageSize);
        if (pageNum == maxPage) {
            _this.isHasMoreArticles = false;
            _this.setState({
                loadMoreText: '小主，没有更多文章啦'
            });            
        } else {
            _this.setState({
                loadMoreText: '小主，Go Go Go...'
            });
        }
    },

    initWindowScrollEvent: function() {
        var _this = this;
        _this.loadMoreTimer = null;
        window.addEventListener('scroll', function() {
            if(_this.loadMoreTimer) {
                clearTimeout(_this.loadMoreTimer);
            }
            _this.loadMoreTimer = setTimeout(function(){
                var scrollDoc = document.body;
                var scrollTop = scrollDoc.scrollTop,
                    scrollHeight = scrollDoc.scrollHeight,
                    windowHeight = document.documentElement.clientHeight;
                if((scrollTop + windowHeight + 60) >= scrollHeight && _this.isHasMoreArticles) {
                    _this.initPageNum++;
                    _this.getArticles(_this.initPageNum); // 初始化获取第一页数据
                }
            }, 300);
        });
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
        var loadMoreText = _this.state.loadMoreText;
        return ( < div className = "content-box" >
            <div className = "articles-container">{
                articles.map(function(item, index){
                    var articleTitle = item.title;
                    var articleUrl = item.url;
                    var articleThumb = item.thumb_nail;
                    var articleReleaseTime= (item.release_time) ? UtilTools.formatISODateToLocalString(item.release_time).split(' ')[0] : '';
                    var articleDesc = item.abstract;
                    var articleWXPublicNum = item.wechat_number;
                    return (<div className="article-item" onClick={_this.handleArticleItemClick.bind(_this, articleUrl)} key={index}>
                        <div className="article-item-l">
                            <img className="article-item-l-img" src={"http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=" + articleThumb}/>
                        </div>
                        <div className="article-item-r">
                            <span className="article-item-title">{articleTitle}</span>
                            <span className="article-item-desc">{articleDesc}</span>
                            <span className="article-item-wx-public-num">{articleWXPublicNum}&nbsp;&nbsp;&nbsp;&nbsp;{articleReleaseTime}</span>
                        </div>
                    </div>);
                })
            }</div>
            <div className="articles-loadmore">{loadMoreText}</div>
            < /div>
        );
    }
});
module.exports = contentComponent;