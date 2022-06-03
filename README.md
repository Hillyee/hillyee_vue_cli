## 说明文档

### 一个帮助你快速搭建和开发前端项目的CLI

#### 如何安装？

```shell
npm install hillyee_vue_cli -g
```

#### 创建项目

```shell
yee create projectname
```

#### 项目开发

##### 1. 创建组件

```shell
yee addcpn ComponentName # 默认存放到src/components目录下
yee addcpn ComponentName -d src/pages/home # 也可以指定存放目录
```

##### 2. 创建Vue页面，并配置路由

```
yee addpage PageName 
# 例如yee addpage Home,默认会放到src/pages/home/Home.vue中,并且会创建src/page/home/router.ts
yee addpage PageName -d src/views # 也可以指定文件夹，但需要手动集成路由
```

##### 3. 创建Vuex子模块

```shell
yee addstore YourVuexChildModuleName 
# yee addstore home，默认会放到src/store/modules/home/index.ts和types.ts
yee addstore YourVuexChildModuleName -d src/vuex/modules # 也可以指定文件夹
```