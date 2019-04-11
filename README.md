# bes-ui
一个基于vue封装的UI组件库，这只是一个模版，内置两个组件Component1，和Component2，支持统一加载和按需加载，可以按需分别加载对应组件的js和css，模块化的方式基本参考ElemenuUI，按需加载用babel-plugin-component。

 [![npm version](https://img.shields.io/npm/v/bes-ui.svg?style=flat-square)](https://www.npmjs.com/package/bes-ui)
 [![npm downloads](https://img.shields.io/npm/dm/bes-ui.svg?style=flat-square)](https://npm-stat.com/charts.html?package=bes-ui)
[![npm build](https://travis-ci.org/BothEyes1993/bes-ui.svg?branch=master)](https://img.shields.io/travis/BothEyes1993/bes-ui.svg)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/BothEyes1993/bes-ui/blob/master/LICENSE)


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
