# COVID-19

### 前言

预览地址：[https://yangzw.vip/covid-19](https://yangzw.vip/covid-19)

![covid-19](https://user-gold-cdn.xitu.io/2020/6/2/17273da0e3a5f020?imageView2/2/w/800/q/85)

笔者写这个项目是为了让入门React Hooks的同学能快速学会和应用这个强大的React特性，项目虽小但五脏俱全，灵活运用React Hooks开发技巧，将Hook贯穿到整个项目中，结合实际场景解决实际问题。

本项目代码简洁条理清晰，非常适合前端小白和对React Hooks感兴趣的小伙伴学习，如果你是大神请忽略吧。整个项目使用到以下Hook，这几个Hook已经能完成大部分实际应用需求了。

- 内置Hook
	- [x] **useState**：定义状态和状态修改逻辑
	- [x] **useEffect**：执行某些可能的副作用
	- [x] **useCallback**：缓存引用类型
	- [x] **useReducer**：定义状态和状态修改逻辑
	- [x] **useContext**：管理全局数据状态
- 自定义Hook
	- [x] **useRequest**：封装接口请求的业务逻辑
	- [x] **useStore**：封装小型Redux的业务逻辑
	- [x] **useViewport**：封装屏幕断点的业务逻辑

### 安装

- `npm i -g bruce-cli`
- `npm install`

> bruce-cli安装失败

- Node环境：`node > 12.0.0`、`npm > 6.9.0`(可用NVM切换Node环境)
- 将NPM源镜像设置为淘宝镜像：`npm config set registry https://registry.npm.taobao.org`
- 将Sass源镜像设置为淘宝镜像：`npm config set sass-binary-site https://npm.taobao.org/mirrors/node-sass`
- 重新执行命令安装：`npm i -g bruce-cli`

> bruce-cli

`bruce-cli`是一个**React/Vue**应用自动化构建脚手架，其零配置开箱即用的优点非常适合入门级、初中级、快速开发项目的前端同学使用，还可通过创建`brucerc.js`文件来覆盖其默认配置，只需专注业务代码的编写无需关注构建代码的编写，让项目结构更简洁。详情请戳[这里](https://github.com/JowayYoung/bruce-cli)，使用时记得查看文档哟，喜欢的话给个Star。

- 官网地址：[https://yangzw.vip/source?id=bruce-cli](https://yangzw.vip/source?id=bruce-cli)
- Github地址：[https://github.com/JowayYoung/bruce-cli](https://github.com/JowayYoung/bruce-cli)

### 开发环境

`bruce b`

- 请选择构建依赖：选择`prop-types react react-dom trample`
- 请选择构建环境：`开发环境`
- 请输入调试端口：`9999`(默认)
- 请确认是否打开浏览器：`Yes`
- 请确认是否校验CSS：`Yes`
- 请确认是否校验JS：`Yes`

### 生产环境

`bruce b`

- 请选择构建依赖：选择`prop-types react react-dom trample`
- 请选择构建环境：`生产环境`
- 请确认是否校验CSS：`Yes`
- 请确认是否校验JS：`Yes`
- 请确认是否输出ES6代码：`No`
- 请确认是否动态导入垫片：`No`
- 请确认是否哈希文件名称：`No`
- 请确认是否时间化根目录：`No`
- 请确认是否深度压缩文件：`No`
- 请确认是否分析打包结果：`No`
- 请确认是否上传到服务器：`No`

### 结语

目前还在撰写相应的`文章教程`和录制相应的`视频教程`，有兴趣的同学可关注我的公众号`IQ前端`，后面会陆续发布。我也会尽快完成这些任务，和大家一起分享我的学习心路。

**关注公众号`IQ前端`，一个专注于CSS/JS开发技巧的前端公众号，更多前端小干货等着你喔**

![](https://yangzw.vip/static/frontend/account/IQ前端公众号.jpg)