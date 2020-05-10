# MCCO

## 介绍

MCCO 是一个基于 Vue 的**低侵入**、**热插拔**、**物料高效共享**解决方案。

**低侵入**是指在原有项目中引入 MCCO 的成本很低；

**热插拔**是指开发者可以无痛移除 MCCO；

**物料共享**是指 MCCO 旨在帮助团体内部物料的高效复用。

::: tip 释义
**物料**: 基于原子组件搭建的复杂组件或适用于某一特定场景的业务组件。  
:::

::: tip 提示
目前 MCCO 支持的原子组件库包含:
- [ElementUI](https://element.eleme.cn/#/zh-CN/component/installation)
- [IView](https://www.iviewui.com/docs/guide/install)
:::

### 它是如何工作的？

MCCO 集成了 `@vue/cli-service-global` 的快速原型开发功能，开发者可以使用 MCCO 快速开发物料并发布到 MCCO 的`物料市场`。
同时 MCCO 还集成了 `vuepress`, 开发者可以在开发物料的同时，编写相应的示例文档。

开发者只需引入 [mcco](https://www.npmjs.com/package/mcco) 即可使用在线市场的任一物料。

开发者在开发时默认使用远程注册组件的方式，实时同步物料市场的组件。同时`物料市场`提供了下载项目物料源码功能，配合 [mcco](https://www.npmjs.com/package/mcco) 开发者可以无缝切换到源码开发(供生产环境使用)。

::: tip 释义
**物料市场**: MCCO 拥有一个线上市场供开发者分享物料或选择物料到指定项目中。
:::

## 快速上手

### 安装

``` bash
npm install mcco
```

### 使用

``` js
import Vue from 'vue'
import Materiel from 'mcco'

Vue.use(Materiel, {
  url: '',
  materiels: {},
})

```

``` vue
<template>
  <Materiel name="materiel-name"></Materiel>
</template>
```

## 物料开发

``` bash
npm install -g mcco-script # 安装 mcco-script
mcco-script materiel create <物料名称> --template element # 创建基于 ElementUI 的新物料项目
# mcco-script materiel create <物料名称> --template iview # 创建基于 view-design 的新物料项目
cd <物料名称> # 进入项目
npm run dev # 进入组件开发模式
npm run doc # 进入文档开发模式
npm run publish # 发布到物料库
```

::: tip 提示
项目根目录下有 `mcco.config.json` 配置文件，需要配置 `storeUrl` 和 `accessToken` 方可发布。

**storeUrl**: 物料市场的 api 入口地址  
**accessToken**: 登录物料市场，点击右上角头像选择 `AccessToken` 选项，即可自动复制 AccessToken 到剪切板。
:::
