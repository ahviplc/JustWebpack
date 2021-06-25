// 引入css less
// 写法一
// 下面写法可行
require('../css/iconfont.css')
require('../css/index.less')

// 写法二
// 这个写法不可行 使用写法一
// 报错
// Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (8:0)
// You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
// import '../css/iconfont.css';
// import '../css/index.less';

function add(x, y) {
    return x + y;
}

console.log(add(1, 2));

function sayHello() {
    console.log('hello Webpack');
}

sayHello()
