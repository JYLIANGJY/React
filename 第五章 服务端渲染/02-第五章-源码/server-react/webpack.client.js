const path=require('path')
const config=require('./webpack.base.js')
const merge=require('webpack-merge')
const clientConfig={
       mode:'development',
    entry:'./src/client/index.js',
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'public')
    },
    module:{
        rules:[{
            test:/\.css?$/,
            use:['style-loader',{
                loader:'css-loader',
                options:{
                    modules:true
                }
            }]
        }]
    }
    // module:{
    //     rules:[{
    //         test:/\.(js|jsx)?$/,
    //         loader:'babel-loader',
    //         exclude:'/node_modules/',
    //         options:{
    //             presets:["@babel/preset-env","@babel/preset-react"]
    //         }
    //     }]
    // }
}
module.exports=merge(config,clientConfig)

// npm install npm-run-all --save-dev