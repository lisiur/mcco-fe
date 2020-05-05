# MCCO

## 介绍

MCCO 是一个基于 Vue 的**低侵入**、**热插拔**、**物料高效共享**解决方案。

**低侵入**是指在原有项目中引入 MCCO 的成本很低；

**热插拔**是指开发者可以无痛移除 MCCO；

**物料共享**是指 MCCO 旨在帮助团体内部物料的高效复用。

::: tip 释义
**物料**: 基于原子组件搭建的复杂组件或适用于某一特定场景的业务组件。  
:::

::: warning 提示
目前 MCCO 支持的原子组件库为 [ElementUI](https://element.eleme.cn/#/zh-CN/component/installation)。
:::

### 它是如何工作的？

MCCO 集成了 `@vue/cli-service-global` 的快速原型开发功能，开发者可以使用 MCCO 快速开发物料并发布到 MCCO 的`物料市场`。
同时 MCCO 还集成了 `vuepress`, 开发者可以在开发物料的同时，编写相应的示例文档。

开发者只需引入 MCCO `注册器` 和 `Materiel` 即可使用在线市场的任一物料。

MCCO 同时提供快照功能，发布线上版本时，可以提供一个项目物料的本地版本，确保线上版本不受影响。

需要移除 MCCO 时，MCCO 提供下载物料源码（Vue 文件）的功能，供开发者无缝替换。

::: tip 释义
**物料市场**: MCCO 拥有一个线上市场供开发者分享物料或选择物料到指定项目中。

**注册器**: 一段 JS 脚本，能够识别`物料市场`的项目，搭配 `Materiel`使用。

**Materiel**: 一个 Vue 组件，可以远程加载在线市场的物料。
:::

::: warning 提示
事实上，MCCO 会将注册器和Materiel集成到一个脚本中，所以实际上只需引用一个脚本即可。
:::


## 快速上手

### 安装

在 `index.html` 中引入 `mcco.css` 和 `mcco.js` 即完成 MCCO 的安装。

然后引入物料市场的某个项目脚本即可使用该项目中选择的物料。

`index.html`
``` html
<link rel="stylesheet" href="mcco.css">
<script src="mcco.js"></script>
<script src="source/project/5eaffdfaa921357a76f1b8d6"></script>
```

## 开发物料

``` bash
npm install -g mcco-script # 安装 mcco-script
mcco-script materiel create <物料名称> # 创建新物料项目
cd <物料名称> # 进入项目
npm run dev # 进入开发模式
npm run doc # 进入文档模式
npm run publish # 发布到物料库
```

::: tip 提示
项目根目录下有 `mcco.config.json` 配置文件，需要配置 `storeUrl` 和 `accessToken` 方可发布。

**storeUrl**: 物料市场的 origin
**accessToken**: 登录物料市场，在右上角头像出有 `AccessToken` 选项，点击即可自动复制 AccessToken 到剪切板。
:::
