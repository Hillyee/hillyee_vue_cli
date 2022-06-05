## 说明文档

### 一个帮助你快速搭建和开发前端项目的CLI

#### 如何安装脚手架？

```shell
npm install hillyee_vue_cli -g
```

#### 创建项目

```shell
yee create projectname
```
> 项目使用 vue3 + ts的模板
> github仓库：https://github.com/Hillyee/yee_vue3_temp.git


#### 项目开发

##### 1. 创建组件

```shell
yee addcpn ComponentName # 默认存放到src/components目录下
yee addcpn ComponentName -d src/pages/home # 也可以指定存放目录
```

##### 2. 创建Vue页面，并配置路由

```shell
yee addpage PageName 
# 例如yee addpage Home
# 页面page默认会放到src/pages/home/home.vue中
# 路由router默认会放到src/router/home/home.ts中

# 也可以指定文件夹,page和router中间用 '-' 隔开
# 例如
yee addpage home -d src/views-src/homeRouter
# 页面会放到src/views/home/home.vue中
# 路由会放到src/homeRouter/home/home.ts中
```

##### 3. 创建Vuex子模块

```shell
yee addstore YourVuexModuleName 
# 例如
yee addstore home
# 默认在src/store/modules/home目录创建index.ts和types.ts

# 也可以指定文件夹
yee addstore home -d src/vuex/modules 
# 会在src/vuex/modules/home目录创建index.ts和types.ts
```

#### 查看所有选项
```shell
yee --help

```