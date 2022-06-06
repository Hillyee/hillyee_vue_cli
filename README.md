# 说明文档

## 一个帮助你快速搭建和开发前端项目的CLI

### 如何安装脚手架？

```shell
npm install hillyee_vue_cli -g
```

### 创建项目

```shell
yee create projectname
```
> 项目使用 vue3 + ts + vite 的模板
>
> github仓库：https://github.com/Hillyee/yee_vue3_temp.git

### 查看所有选项

```shell
yee --help
```

### 项目开发

#### 1. 创建组件

```shell
yee addcpn ComponentName # 默认存放到src/components目录下

# 也可以指定存放目录 (-d 后加上指定目录)
yee addcpn ComponentName -d src/pages/ComponentName
```

例如：`yee addcpn home`，会在 src/components/home.vue 创建：

```vue
<script lang="ts" setup>
const props = defineProps({
  
})
const emit = defineEmits([])

const message = 'home'

defineExpose({
  
})
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<style scoped lang="less">
.home {

}
</style>
```

#### 2. 创建Vue页面，并配置路由

```shell
yee addpage PageName 
# 例如yee addpage home
# 页面page默认会放到src/pages/home/home.vue中
# 路由router默认会放到src/router/home/home.ts中

# 也可以指定文件夹, page和router中间用 '-' 隔开
# 例如
yee addpage home -d src/views-src/homeRouter
# 页面会放到src/views/home/home.vue中
# 路由会放到src/homeRouter/home/home.ts中
```

结构如下：

```vue
// home.vue
<script lang="ts" setup>
const props = defineProps({
  
})
const emit = defineEmits([])

const message = 'home'

defineExpose({
  
})
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<style scoped lang="less">
.home {

}
</style>
```

```ts
// home.ts
// 普通加载路由
// import home from './home.vue'
// 懒加载路由
const home = () => import('./home.vue')
export default {
  path: '/home',
  name: 'home',
  component: home,
  children: [
  ]
}
```

#### 3. 创建Vuex子模块

```shell
yee addstore YourVuexModuleName 
# 例如
yee addstore home
# 默认在src/store/home目录创建home.ts和types.ts

# 也可以指定文件夹
yee addstore home -d src/vuex
# 会在src/vuex/home目录创建home.ts和types.ts
```

结构如下：

```ts
// home.ts
import { Module } from 'vuex'
import { IRootState } from '../types'
import { IHomeState } from './types'

const homeModule: Module<IHomeState, IRootState> = {
  namespaced: true,
  state() {
    return {

    }
  },
  mutations: {

  },
  actions: {
   
  },
  getters: {
    
  }
}

export default homeModule
```

```ts
// types.ts
export interface IHomeState {
  
}
```

#### 报错处理

1. 如果 create 项目的时候报错：`'git clone' failed with status 128`，可自行 clone 模板并下载依赖

```shell
git clone https://github.com/Hillyee/yee_vue3_temp.git YourProjectName # 克隆模板
cd YourProjectName
npm install # 下载依赖
npm run dev # 启动项目
```

2. 如果 create 项目的时候报错： `'git checkout' failed with status 1`，模板已 clone下来

```shell
cd YourProjectName
npm install # 下载依赖
npm run dev # 启动项目
```