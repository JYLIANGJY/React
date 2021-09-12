// var express=require('express')
import express from 'express'
// const React=require('react')
import React from 'react'
// const {renderToString}=require('react-dom/server')
import {renderToString} from 'react-dom/server'
import Home from './components/Home/index'

import {StaticRouter,Route,matchPath} from 'react-router-dom'
import Routes from './Routes'
import {store} from './store'
import {Provider} from 'react-redux'
import {matchRoutes} from 'react-router-config'
// const Home=require('./components/Home/index')
var app=express()
app.use(express.static('public'))
const App=class extends React.Component{
    render(){
        return React.createElement('h3',null,'Hello World')
    }
    //node-modules
}


app.get('*',function(req,res){
    // 根据createElement创建的React元素，来生成一个html字符串。
//  const htmlContent=renderToString(React.createElement(App))
//const htmlContent=renderToString(<Home/>)// jsx

//  const matchRoutes=[]   
// Routes.some(route=>{
//       const match=matchPath(req.path,route);
//       if(match){
//         matchRoutes.push(route)
//       }
//    })
// npm install --save react-router-config
const matchRoute=matchRoutes(Routes,req.path);
// console.log('matchRoute=',matchRoute)
const promises=[];
matchRoute.forEach(item=>{
    if(item.route.loadData){
        promises.push(item.route.loadData(store))
    }
})
Promise.all(promises).then(()=>{
    const context={}
    const htmlContent=renderToString((
        <Provider store={store}>
            <StaticRouter context={context}>  
                <div>
                    {
                        Routes.map(route=>(
                            <Route {...route}></Route>
                        ))
                    }
                </div>
              {/* {Routes} */}
            </StaticRouter>
        </Provider>
    ))
    //   res.send(htmlContent)
    res.send(`<html>
        <head>
            <title>Hello World</title>
               <style>
                ${context.css?context.css:''}
               </style> 
            <body>
            <div id='root'>${htmlContent}</div> 
             <script>
              window.contextData={
                  state:${JSON.stringify(store.getState())}
              }
             </script>        

            </body>
           <script src='/index.js'></script>
        </head>
    </html>`)
})



})

var server=app.listen(3000)