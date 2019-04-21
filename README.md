# bes-ui
一个基于Vue CLI 3.0，Babel7，VUE2.6封装的VUE-UI组件库模版，内置两个组件component1，和component2，支持统一加载和按需加载，可以按需分别加载对应组件的js和css，模块化的方式基本参考ElemenuUI，按需加载用babel-plugin-component组件支持。

 [![npm version](https://img.shields.io/npm/v/bes-ui.svg?style=flat-square)](https://www.npmjs.com/package/bes-ui)
 [![npm downloads](https://img.shields.io/npm/dm/bes-ui.svg?style=flat-square)](https://npm-stat.com/charts.html?package=bes-ui)
[![npm build](https://travis-ci.org/BothEyes1993/bes-ui.svg?branch=master)](https://img.shields.io/travis/BothEyes1993/bes-ui.svg)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/BothEyes1993/bes-ui/blob/master/LICENSE)
[![gzip size: JS](http://img.badgesize.io/https://unpkg.com/bes-ui/package/index.umd.min.js?compression=gzip&label=gzip%20size:%20JS)](http://img.badgesize.io/https://unpkg.com/bes-ui/package/index.umd.min.js?compression=gzip&label=gzip%20size:%20JS)
[![gzip size: CSS](http://img.badgesize.io/https://unpkg.com/bes-ui/package/index.css?compression=gzip&label=gzip%20size:%20CSS)](http://img.badgesize.io/https://unpkg.com/bes-ui/package/index.css?compression=gzip&label=gzip%20size:%20CSS)


## Installing

```shell
npm install bes-ui --save
```

在 [unpkg](https://unpkg.com/bes-ui/) 上获取

```HTML
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/bes-ui/package/index.css">
<!-- 引入脚本 -->
<script src="https://unpkg.com/bes-ui/package/index.umd.min.js"></script>
```

## Example

```JavaScript
// 统一加载
import BesUI from 'bes-ui'
Vue.use(BesUI)

// 只加载component1
import { component1 } from 'bes-ui'
Vue.use(component1)

// 加载component1和component2
import { component1 , component2} from 'bes-ui'
Vue.use(component1)
Vue.use(component2)
```
## 标签

```html
    <component1></component1>
    <component2></component2>
```

> 按需加载功能只针对有Babel配置的项目，单纯用script和link的方式引入js和样式是全量引入

## License

Copyright (c) 2018-present, BothEyes1993
