# bes-ui
一个基于vue封装的UI组件库，这只是一个模版，内置两个组件Component1，和Component2，支持统一加载和按需加载。

 [![npm version](https://img.shields.io/npm/v/bes-ui.svg?style=flat-square)](https://www.npmjs.com/package/bes-ui)
<!--[![npm build](https://travis-ci.org/xuliangzhan/xe-clipboard.svg?branch=master)](https://travis-ci.org/xuliangzhan/xe-clipboard)
[![npm downloads](https://img.shields.io/npm/dm/xe-clipboard.svg?style=flat-square)](http://npm-stat.com/charts.html?package=xe-clipboard)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/xuliangzhan/xe-clipboard/blob/master/LICENSE) -->


## Installing

```JavaScript
npm install bes-ui --save
```

## Example

```JavaScript
// 统一加载
import BesUI from 'bes-ui'
Vue.use(BesUI)

// 只加载Component1
import { Component1 } from 'bes-ui'
Vue.use(Component1)

// 加载Component1和Component2
import { Component1 , Component2} from 'bes-ui'
Vue.use(Component1)
Vue.use(Component2)
```

## License

Copyright (c) 2018-present, BothEyes1993
