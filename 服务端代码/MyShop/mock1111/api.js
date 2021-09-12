const fs = require('fs') //这时属于node中的的包，专门用来读取文件中的内容。
    // 根据传递过来的文件名称读取文件内容
function fromJonsFile(fileName) {
    // req:表示接受浏览器发送过来的数据（request）
    // res:表示将数据返回给浏览器 (response)
    return (req, res) => {
        const data = fs.readFileSync(`mock/data/${fileName}.json`).toString()
        const jsonData = JSON.parse(data)
        return res.json(jsonData)
    }
}

function fromJosnDetailFile(fileName) {
    return (req, res) => {
        const data = fs.readFileSync(`mock/data/${fileName}.json`).toString()
        const jsonData = JSON.parse(data)
        var result = {}
        for (var i = 0; i < jsonData.message.length; i++) {
            // params固定写法，表示存储的参数，它里面存储了一个id参数
            if (jsonData.message[i].id === Number(req.params.id)) {
                result = { "status": 0, "message": [jsonData.message[i]] }
                break;
            }
        }
        return res.json(result)

    }
}
const proxy = {
    'GET /api/getSwape': fromJonsFile('Swape'),
    'GET /api/getProductList': fromJonsFile('GoodProductList'),
    'GET /api/getProductInfo/:id': fromJosnDetailFile('ProductInfo')
}
module.exports = proxy;