const path=require('path')
const nodeExternals=require('webpack-node-externals')
const config=require('./webpack.base.js')
const merge=require('webpack-merge')
//npm install webpack-node-externals --save-dev
const serverConfig={
    target:'node',
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'build')
    },
    //不将node_modules目录中内容进行打包
    externals:[nodeExternals()],
    module:{
        rules:[{
            test:/\.css?$/,
            use:['isomorphic-style-loader',{
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
module.exports=merge(config,serverConfig)
// npm install npm-run-all --save-dev