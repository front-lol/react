const path = require('path');

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
        app: ['./4.client']
    },
    module: {
        rules: [{
            // js / jsx 에 babel-lader 적용
            test: /\.jsx?/,
            loader: 'babel-loader',
            options:{
                presets:['@babel/preset-env', '@babel/preset-react'],
                plugins:['@babel/plugin-proposal-class-properties']
            }
        }]
    },

    // output
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    }
};