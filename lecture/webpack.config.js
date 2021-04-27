const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const { webpack } = require('webpack');

module.exports ={
    name: 'wordrelay-setting',
    mode: 'development', // 실서비스: production
    devtool: 'eval',

    // entry 확장자 (js, jsx, css, json ..)
    resolve: {
        extensions: ['.js', '.jsx']
    },
    // input
    entry: {
        // app: ['./4.client']
        app: ['./5.client']

    },
    module: {
        rules: [{
            // js / jsx 에 babel-lader 적용
            test: /\.jsx?/,
            loader: 'babel-loader',
            options:{
                // plug in 모음 : presets
                // preset-env 예전 browser 지원
                presets:[
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 1% in KR']
                        },
                        // debug:true,
                    }],            
                    '@babel/preset-react'
                ],
                plugins:[
                    '@babel/plugin-proposal-class-properties', 
                    // refresh
                    'react-refresh/babel'
                ]
            }
        }]
    },
    plugins:[
        // new webpack.LoaderOptionsPlugin({debug:true})

        // refresh
        new RefreshWebpackPlugin()
    ],
    // output
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/'
    },
    devServer: {
        publicPath: '/dist/',
        hot:true
    }
};