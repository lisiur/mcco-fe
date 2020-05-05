(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{321:function(t,s,a){"use strict";a.r(s);var n=a(33),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mcco"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mcco"}},[t._v("#")]),t._v(" MCCO")]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("MCCO 是一个基于 Vue 的"),a("strong",[t._v("低侵入")]),t._v("、"),a("strong",[t._v("热插拔")]),t._v("、"),a("strong",[t._v("物料高效共享")]),t._v("解决方案。")]),t._v(" "),a("p",[a("strong",[t._v("低侵入")]),t._v("是指在原有项目中引入 MCCO 的成本很低；")]),t._v(" "),a("p",[a("strong",[t._v("热插拔")]),t._v("是指开发者可以无痛移除 MCCO；")]),t._v(" "),a("p",[a("strong",[t._v("物料共享")]),t._v("是指 MCCO 旨在帮助团体内部物料的高效复用。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("释义")]),t._v(" "),a("p",[a("strong",[t._v("物料")]),t._v(": 基于原子组件搭建的复杂组件或适用于某一特定场景的业务组件。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("目前 MCCO 支持的原子组件库为 "),a("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("ElementUI"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"它是如何工作的？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#它是如何工作的？"}},[t._v("#")]),t._v(" 它是如何工作的？")]),t._v(" "),a("p",[t._v("MCCO 集成了 "),a("code",[t._v("@vue/cli-service-global")]),t._v(" 的快速原型开发功能，开发者可以使用 MCCO 快速开发物料并发布到 MCCO 的"),a("code",[t._v("物料市场")]),t._v("。\n同时 MCCO 还集成了 "),a("code",[t._v("vuepress")]),t._v(", 开发者可以在开发物料的同时，编写相应的示例文档。")]),t._v(" "),a("p",[t._v("开发者只需引入 MCCO "),a("code",[t._v("注册器")]),t._v(" 和 "),a("code",[t._v("Materiel")]),t._v(" 即可使用在线市场的任一物料。")]),t._v(" "),a("p",[t._v("MCCO 同时提供快照功能，发布线上版本时，可以提供一个项目物料的本地版本，确保线上版本不受影响。")]),t._v(" "),a("p",[t._v("需要移除 MCCO 时，MCCO 提供下载物料源码（Vue 文件）的功能，供开发者无缝替换。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("释义")]),t._v(" "),a("p",[a("strong",[t._v("物料市场")]),t._v(": MCCO 拥有一个线上市场供开发者分享物料或选择物料到指定项目中。")]),t._v(" "),a("p",[a("strong",[t._v("注册器")]),t._v(": 一段 JS 脚本，能够识别"),a("code",[t._v("物料市场")]),t._v("的项目，搭配 "),a("code",[t._v("Materiel")]),t._v("使用。")]),t._v(" "),a("p",[a("strong",[t._v("Materiel")]),t._v(": 一个 Vue 组件，可以远程加载在线市场的物料。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("事实上，MCCO 会将注册器和Materiel集成到一个脚本中，所以实际上只需引用一个脚本即可。")])]),t._v(" "),a("h2",{attrs:{id:"快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[t._v("#")]),t._v(" 快速上手")]),t._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("index.html")]),t._v(" 中引入 "),a("code",[t._v("mcco.css")]),t._v(" 和 "),a("code",[t._v("mcco.js")]),t._v(" 即完成 MCCO 的安装。")]),t._v(" "),a("p",[t._v("然后引入物料市场的某个项目脚本即可使用该项目中选择的物料。")]),t._v(" "),a("p",[a("code",[t._v("index.html")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mcco.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mcco.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("source/project/5eaffdfaa921357a76f1b8d6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"开发物料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发物料"}},[t._v("#")]),t._v(" 开发物料")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g mcco-script "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 mcco-script")]),t._v("\nmcco-script materiel create "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("物料名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建新物料项目")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("物料名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入项目")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入开发模式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run doc "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入文档模式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run publish "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 发布到物料库")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("项目根目录下有 "),a("code",[t._v("mcco.config.json")]),t._v(" 配置文件，需要配置 "),a("code",[t._v("storeUrl")]),t._v(" 和 "),a("code",[t._v("accessToken")]),t._v(" 方可发布。")]),t._v(" "),a("p",[a("strong",[t._v("storeUrl")]),t._v(": 物料市场的 origin\n"),a("strong",[t._v("accessToken")]),t._v(": 登录物料市场，在右上角头像出有 "),a("code",[t._v("AccessToken")]),t._v(" 选项，点击即可自动复制 AccessToken 到剪切板。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);