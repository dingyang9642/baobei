###一、目录结构
```
    --app
      --component
        --公共组件
      --conf
        --项目配置文件
      --page
        --页面模块
      --index.html
      --index.jsx
    --mock
      --模拟数据
    --mock.js
      --mockServer代理服务
    --webpack.config.js
      --webpack编译脚本文件
    --output
      --发布目录
```
 
###二、发布目录结构
```
output
    ——assets
      —-项目名
        --js
    ——tempalte 
      --项目名
        --index.html
```

###1、第一步
  npm install -g webpack@2
  npm install -g webpack-dev-server@2

###2、第二步
  npm install

###3、本地调试
  npm run dev 启动本地server,同时会启动代理server

###4、生产环境打包
  npm run build

