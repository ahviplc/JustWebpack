<h1 align="center">Welcome to JustWebpack 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> JustWebpack,Webpack打包小demo.

### 🏠 [Homepage-gitee](https://gitee.com/ahviplc/JustWebpack)

### 🏠 [Homepage-github](https://github.com/ahviplc/JustWebpack)

## Install

`安装依赖`

```sh
npm i
npm install
或者
yarn
yarn install
```

## Usage

`打包`

```sh
npm run dev
npm run build
或者
yarn dev
yarn build
```

## Links

```markdown
尚硅谷最新版Webpack5实战教程(从入门到精通)
https://www.bilibili.com/video/BV1e7411j7T5

上面视频 课件 webpack从入门到精通
下载地址：https://pan.baidu.com/s/1JxvXF8EyG9TSNLqkc98YzQ  
提取码：i5qc

webpack中文文档
https://v4.webpack.docschina.org/

A bundler for javascript and friends. Packs many modules into a few bundled assets. Code Splitting allows for loading parts of the application on demand. Through "loaders", modules can be CommonJs, AMD, ES6 modules, CSS, Images, JSON, Coffeescript, LESS, ... and your custom stuff.
https://github.com/webpack/webpack

安装
https://v4.webpack.docschina.org/guides/installation/

loaders
https://webpack.js.org/concepts/#loaders

划词翻译
https://github.com/lmk123/crx-selection-translate#readme

webpack5打包静态html中img标签引入图片不显示问题_xinga1016的博客-CSDN博客
https://blog.csdn.net/weixin_45226867/article/details/114445464

webpack编译遇到的问题：Error: Cannot find module 'webpack-cli/bin/config-yargs' - JaceyKan - 博客园
https://www.cnblogs.com/jeacy/p/13864454.html

@babel/polyfill · Babel 中文网
https://www.babeljs.cn/docs/babel-polyfill

path-browserify - npm
https://www.npmjs.com/package/path-browserify

GitHub - browserify/path-browserify: The path module from Node.js for browsers
https://github.com/browserify/path-browserify

666666 - webpack5升级过程遇到的一些坑？ - xccjk - 博客园
https://www.cnblogs.com/sk-3/p/14147612.html

webpack5 nodejs模块polyfill（Buffer）__Captain_的博客-CSDN博客
https://blog.csdn.net/qq_39807732/article/details/110089893

构建目标(Targets) | webpack 中文文档
https://webpack.docschina.org/configuration/target/

外部扩展(externals) | webpack 中文文档
https://webpack.docschina.org/configuration/externals/#root

可参考的webpack配置
jjb/webpack.config.js at master · sunoj/jjb · GitHub
https://hub.fastgit.org/sunoj/jjb/blob/master/webpack.config.js

Lodash 简介 | Lodash 中文文档 | Lodash 中文网
https://www.lodashjs.com/

GitHub - lodash/lodash: A modern JavaScript utility library delivering modularity, performance, & extras.
https://github.com/lodash/lodash

logline - npm
https://www.npmjs.com/package/logline

GitHub - latel/logline: client-side frontend logger with multiple storagies
https://github.com/latel/logline

luxon - npm
https://www.npmjs.com/package/luxon

GitHub - moment/luxon: ⏱ A library for working with dates and times in JS
https://github.com/moment/luxon
```

## Notes

### 1. 随记
```markdown
"webpack": "^5.40.0",
"webpack-cli": "^4.7.2",
"webpack-dev-server": "^3.11.2"

"webpack": "^4.41.6",
"webpack-cli": "^3.3.11",
"webpack-dev-server": "^3.10.3"
```

### 2. 注意点

```markdown
* src/js/index.js:1 这个有个注意点 描述.
* 在webpack5中移除了nodejs核心模块的polyfill自动引入，所以需要手动引入，如果打包过程中有使用到nodejs核心模块，webpack会提示进行相应配置.
* 此仓库 https://hub.fastgit.org/sunoj/jjb/blob/master/package.json 其所用依赖 也可学习一下.
```

### 3. 小知识

`详解AMD、CommonJS和UMD模块化规范`

```markdown
CJS: CommonJS模块可以说是当前最流行的模块定义规范。相比于AMD，它的工作效率更高、语法更简单。一开始，CommonJS模块是JavaScript服务器模块的规范。

AMD：Asynchronous Module Definition（异步模块规范），为浏览器设计的模块定义规范，最老的方式之一，专为浏览器而设计。

UMD：Universal Module Definition（通用模块规范），是由社区想出来的一种整合了CommonJS和AMD两个模块定义规范的方法。让你的模块能在javascript所有运行环境中发挥作用。
```

`可使用 idea插件 File Watcher to compile LESS to CSS`

### 4. 代码段

`fs path`

在这 `src/js/index.js` 文件里的话

```js

const path = require('path')

// 下面都是输出
// C:\_developSoftKu\ideaIU-2019.1.3.win\CodeKu2\JustWebpack\src\js
// console.log(__dirname)
// console.log(path.resolve(__dirname));
// console.log(path.resolve(__dirname));
// console.log(path.resolve('./'));
// console.log(path.join(__dirname));
// console.log(process.cwd());

// 这个符合要求
// 输出 C:\_developSoftKu\ideaIU-2019.1.3.win\CodeKu2\JustWebpack\src
// console.log(path.resolve('../'));

console.log(path.join(path.resolve('../'), 'media/README.txt'));
// C:\_developSoftKu\ideaIU-2019.1.3.win\CodeKu2\JustWebpack\src\media\README.txt

const fs = require('fs')
const txt = fs.readFileSync(path.join(path.resolve('../'),'media/README.txt'),'utf8');
console.log(txt)
```

## Author

👤 **LC ahlc@sina.cn**


## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
