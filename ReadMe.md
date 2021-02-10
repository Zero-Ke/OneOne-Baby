## 1.设置npm淘宝源
    npm config set registry https://registry.npm.taobao.org
## 2.查看结果
    npm config get registry
## 3.创建项目
    1.npm install -g create-react-app
    2.create-react-app app
## 4.开始项目
    1.npm i
    2.npm start


# Antd Design
# 1.安装
    1.npm install antd --save
    2.引入样式：import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
        全部加载
            import { Button } from 'antd'
            import 'antd/dist/antd.css'
        按需加载
            import Button from 'antd/es/button'
            import 'antd/es/button/style/css'
    3.配置文件按需加载
        1.npm run eject :拉取react的配置文件
        2.遇到的问题：相关文件被修改，无法运行该命令