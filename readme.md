# COVID-19

### 前言

预览地址：[https://yangzw.vip/covid-19](https://yangzw.vip/covid-19)

![covid-19](https://static.yangzw.vip/frontend/react-hooks/covid-19.png)

笔者编写该项目是为了让入门**React Hooks**的同学能快速学会与应用这个强大的`React特性`，项目虽小但五脏俱全，灵活运用`React Hooks`开发技巧，将`Hook`贯穿到整个项目中，结合实际场景解决实际问题。

本项目代码简洁条理清晰，很适合前端小白与对`React Hooks`感兴趣的小伙伴学习，若你是大神请忽略吧。整个项目使用到以下`Hook`，这几个`Hook`已能完成大部分实际应用需求。

- 内置Hook
	- [x] **useState**：定义`状态`和`状态修改逻辑`
	- [x] **useEffect**：执行某些可能的`副作用`
	- [x] **useCallback**：缓存`引用类型`
	- [x] **useReducer**：定义`状态`和`状态修改逻辑`
	- [x] **useContext**：管理`全局数据状态`
- 自定义Hook
	- [x] **useRequest**：封装接口请求的业务逻辑
	- [x] **useStore**：封装小型`Redux`的业务逻辑
	- [x] **useViewport**：封装屏幕断点的业务逻辑

### 步骤

- 安装构建工具：`npm i -g @yangzw/bruce-app`
- 安装项目依赖：`npm i`或`yarn`
- 启动构建流程：`bruce-app b`，选择`开发环境`
- 启动打包流程：`bruce-app b`，选择`测试环境`或`生产环境`

[@yangzw/bruce-app](https://github.com/JowayYoung/bruce/tree/main/packages/app)是一个零配置开箱即用的**JS/React/Vue**应用自动化构建脚手架，真正实现构建代码与业务代码完全分离，无需关注构建过程，专心编写业务代码。更多详情请查看[官网文档](https://jowayyoung.github.io/bruce/app)。

### 结语

**关注公众号`IQ前端`，一个专注于CSS/JS开发技巧的前端公众号，更多前端小干货等着你喔**

![IQ前端](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/131dd0053e87483d89518a15a5fe211f~tplv-k3u1fbpfcp-zoom-1.image)