var Util = {
    sortArray: function(arr, type, index) {
        // 首先对原有数据做一个深拷贝
        var copyArr = this.deepCopy(arr, []);
        // 默认降序
        type = (type && (type === 'desc' || type === 'asc')) ? type : 'desc';
        copyArr.sort(function(arr1, arr2) {
            var n1 = parseFloat(arr1[index]),
                n2 = parseFloat(arr2[index]);
            if (type === 'asc') {
                // 说明升序
                return n1 - n2;
            } else {
                // 说明降序
                return n2 - n1;
            }
        });
        return copyArr;
    },
    deepCopy: function(p, c) {
        var c = c || {};
        for (var i in p) {　　
            if (typeof p[i] === 'object') {　　　　
                c[i] = (p[i].constructor === Array) ? [] : {};
                arguments.callee(p[i], c[i]);　　
            } else {　　　　　
                c[i] = p[i];　　
            }
        }
        return c;
    },
    initArray: function(len, defaultValue) {
        var arr = [];
        for (var i = 0; i < len; i++) {
            arr[i] = defaultValue;
        }
        return arr;
    },
    splitArray: function(arr) {
        var len = arr.length;
        var totalArr = [];
        for (var j = 0; j < len; j++) {
            totalArr[j] = this.initArray(len, 0);
        }
        for (var k = 0; k < len; k++) {
            totalArr[k][k] = arr[k];
        }
        return totalArr;
    },
    formatISODateToLocalString: function(isodate) {
        var dateString = new Date(isodate).toISOString().replace(/T/g, ' ').replace(/-/g, '\/').replace(/\.[\d]{3}Z/, '');
        var date = new Date(+new Date(dateString) + 8 * 3600 * 1000);
        var result = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        return result;
    }
};

module.exports = Util;