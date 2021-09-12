const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})// 创建next实例
const handle = app.getRequestHandler() //获取next中的handler,用来处理请求
app.prepare()
.then(() => {
  const server = express() // npm install --save express
// 处理自己的路由(请求的路由)
  server.get('/user/detail/:id', (req, res) => {
     //实现url重写
    const actualPage = '/user/detail';//真实路径
    // const query = {id:req.params.id}  //获取参数
    // amp名字是固定的。
   return app.render(req, res, actualPage, {amp:req.params.id}) 
  })
  server.get('*', (req, res) => {
     
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})