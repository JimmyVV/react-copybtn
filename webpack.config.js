var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react-with-addons.js');
var pathToReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');
module.exports = {
    entry: {
        index: './src/index'
    }, //演示单入口文件
    output: {
        path: path.join(__dirname, './example/dist'), //打包输出的路径
        filename: 'index.js', //打包后的名字
    },
    resolve: {
        alias: {
            "react": pathToReact,
            'react-dom':pathToReactDOM
        },
        extensions: ["", ".webpack.js", ".web.js", ".jsx",".js"]
    },
    module: {
        noParse: [pathToReact,pathToReactDOM],
        loaders: [{
            test: /\.jsx?$/,
            loader: "babel",
            query: {
                presets:['react','es2015','stage-0']
            },
            exclude: /node_modules/
        }]
    },
    watch: true
};
    