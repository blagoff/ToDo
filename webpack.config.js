const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
    new HtmlWebpackPlugin ({
        template: 'src/index.html',
        filename: 'index.html',
        inject: 'body'
})];
    

module.exports = (env) => {

    const environment = env || 'production';
    return {
        
        
        mode: environment,
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                },

    {
        test: /\.css$/,
        use: [
            { loader: 'style-loader'},
            {
                loader: 'css-loader',
                options: {
                    modules: true
                    }
                }
             ]
            }
        ]
     }
    }
};