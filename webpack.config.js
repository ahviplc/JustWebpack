/*
webpack.config.js  webpack的配置文件
 作用: 指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）
 所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs。

  开发环境配置：能让代码运行
    运行项目指令：
      webpack 会将打包结果输出出去
      npx webpack-dev-server 只会在内存中编译打包，没有输出
      启动devServer指令为：npx webpack-dev-server

      注意:
      在webpack-cli 4.x中，不能过webpack-dev-server启动项目了，需要通过webpack serve...或者修改webpack-cli版本改为3.x
*/

// resolve用来拼接绝对路径的方法
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // webpack配置
    // 入口起点
    entry: './src/js/index.js',
    // 输出
    output: {
        // 输出文件名
        filename: 'js/built.js',
        // 输出路径
        // __dirname 是nodejs的变量，代表当前文件的目录绝对路径
        path: resolve(__dirname, 'dist')
    },
    // loader的配置
    module: {
        rules: [
            // 详细loader配置
            // 不同文件必须配置不同loader处理
            // loader的配置
            // 处理txt
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            // 处理ts
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            // 处理 vue
            // 注意处理 vue css 的话 使用 vue-style-loader
            // 可参考 https://hub.fastgit.org/sunoj/jjb/blob/master/webpack.config.js 配置
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                // 处理less资源
                test: /\.less$/,
                use: [
                    // 写法一
                    // 'style-loader',
                    // 'css-loader',
                    // // 将less文件编译成css文件
                    // // 需要下载 less-loader和less
                    // 'less-loader'

                    // 写法二
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                    }
                ]
            },
            {
                // 处理css资源
                test: /\.css$/,
                // use数组中loader执行顺序：从右到左，从下到上 依次执行
                // loader 从右到左（或从下到上）地取值(evaluate)/执行(execute)
                // 创建style标签，将js中的样式资源插入进行，添加到head中生效
                use: [
                    // 写法一
                    // 'style-loader',
                    // //'css-loader',
                    // {
                    //     loader: 'css-loader',
                    //     options: {
                    //         esModule: false
                    //     }
                    // }

                    // 写法二
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            {
                // 处理图片资源
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    // 图片大小小于8kb，就会被base64处理
                    // 优点: 减少请求数量（减轻服务器压力）
                    // 缺点：图片体积会更大（文件请求速度更慢）
                    limit: 8 * 1024,
                    // 给图片进行重命名
                    // [hash:10]取图片的hash的前10位
                    // [ext]取文件原来扩展名
                    name: '[hash:10].[ext]',
                    // 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
                    // 解析时会出问题：[object Module]
                    // 解决：关闭url-loader的es6模块化，使用commonjs解析
                    // 关闭es6模块化
                    esModule: false,
                    outputPath: 'imgs'
                }
            },
            {
                // 处理svg
                test: /\.svg$/,
                use: [
                    'svg-url-loader',
                ]
            },
            {
                // 处理html中img资源
                // test表示匹配
                test: /\.html$/,
                loader: 'html-loader',
                options: {esModule: false}
            },
            {
                // 处理其他资源
                // 打包除了html|js|css|less|jpg|png|gif的其他资源
                // explode表示排除
                exclude: /\.(html|js|css|less|jpg|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: 'media'
                }
            }
        ]
    },
    // plugins的配置
    plugins: [
        // plugins的配置
        // html-webpack-plugin
        // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
        // 需求：需要有结构的HTML文件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: false // 是否压缩
        }),
        new VueLoaderPlugin()
    ],
    // 模式
    mode: 'development', // 开发模式
    // 开发服务器 devServer：用来自动化（自动编译，自动打开浏览器，自动刷新浏览器~~）
    // 特点：只会在内存中编译打包，不会有任何输出
    // 启动devServer指令为：npx webpack-dev-server
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        compress: true, // 压缩
        port: 3000, // 设置端口
        open: true, // 打开浏览器
        progress: true // 显示进度
    },
    // // 先配置 不启用
    // resolve: {
    //     // https://github.com/babel/babel/issues/8462
    //     // https://blog.csdn.net/qq_39807732/article/details/110089893
    //     // 如果确认需要node polyfill，设置resolve.fallback安装对应的依赖
    //     fallback: {
    //         // crypto: require.resolve('crypto-browserify'),
    //         path: require.resolve('path-browserify'),
    //         // url: require.resolve('url'),
    //         // buffer: require.resolve('buffer/'),
    //         // util: require.resolve('util/'),
    //         // stream: require.resolve('stream-browserify/'),
    //         // vm: require.resolve('vm-browserify')
    //     },
    //     // 如果确认不需要node polyfill，设置resolve.alias设置为false
    //     alias: {
    //         crypto: false
    //     }
    // },
    // 构建目标
    target: 'web', // node webpack 将在类 Node.js 环境编译代码 || 默认 web 编译为类浏览器环境里可用
    // 外部扩展
    externals: {}
};
