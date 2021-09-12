const fs = require('fs');

function fromJSONFile(filename) {
    return (req, res) => {
        const data = fs.readFileSync(`mock/data/${filename}.json`).toString();

        const json = JSON.parse(data);
        return res.json(json);
    };
}

function fromJSONDetailFile(filename, dataType) {
    return (req, res) => {
        const data = fs.readFileSync(`mock/data/${filename}.json`).toString();

        const json = JSON.parse(data);

        // 如果接收到的id是0，直接将所有的数据返回
        // 注意这里是字符串类型
        if (req.params.id === '0') {
            console.log("dataType=", dataType);
            return res.json(json);

        } else if (dataType === "imgCategory" && req.params.id !== '0') {
            // 如果该条件成立，表示是根据图片的类别编号，查询出对应的图片信息。
            var result = { "status": 0, "message": [] };
            // console.log("id=", req.params.id);
            for (var i = 0; i < json.message.length; i++) {
                // console.log("json:",json.message[i].id);
                // console.log("json:",typeof(req.params.id));
                if (json.message[i].category_id === Number(req.params.id)) {

                    // 一个类型下有很多的图片。
                    result.message.push(json.message[i]);
                    // result = { "status": 0, "message": [json.message[i]] };
                    // break;
                }
            }
            return res.json(result);
        } else {
            // console.log("json=",json.message.length);
            var result = {};
            // console.log("id=",req.params.id);
            for (var i = 0; i < json.message.length; i++) {
                // console.log("json:",json.message[i].id);
                // console.log("json:",typeof(req.params.id));
                if (json.message[i].id === Number(req.params.id)) {

                    result = { "status": 0, "message": [json.message[i]] };
                    break;
                }
            }
            return res.json(result);
        }

    };
}
// 添加评论内容
function addCommentJson(filename) {
    return (req, res) => {
        // console.log('req=', req.body.content);
        const data = fs.readFileSync(`mock/data/${filename}.json`).toString();
        const json = JSON.parse(data);
        let id = json.message[json.message.length - 1].id + 1;
        // var myDate = new Date();
        const commentMsg = {
            "id": id,
            "username": "匿名用户",
            "add_time": Date.now(),
            "content": req.body.content,
            "category_id": Number(req.params.id)
        }
        json.message.push(commentMsg);
        var str = JSON.stringify(json); //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中 
        fs.writeFile(`mock/data/${filename}.json`, str, function(err) {
            if (err) {
                console.log('写入文件数据错误!!', err);
            } else {
                return res.json({ 'flag': 'ok' });
            }
        })


    }
}
// 添加商品信息
 function addProductJson(filename){
	  return (req, res) => {
		
        // console.log('req=', req.body.content);
        const data = fs.readFileSync(`mock/data/${filename}.json`).toString();
        const json = JSON.parse(data);
		 let id = json.message[json.message.length - 1].id + 1;
        // var myDate = new Date();
        const commentMsg = {
            "id": id,
            "title": req.body.title,		
			"add_time": Date.now(),
			"click":1,
			"img_url": "/product/huaweiPhone.jpg",
            "sell_price": req.body.sell_price,
			"market_price":req.body.market_price,
            "stock_quantity":req.body.stock_quantity
        }
		console.log('commentMsg=',req.body);
        json.message.push(commentMsg);
        var str = JSON.stringify(json); //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中 
        fs.writeFile(`mock/data/${filename}.json`, str, function(err) {
            if (err) {
                console.log('写入文件数据错误!!', err);
            } else {
                return res.json({ 'flag': 'ok' });
            }
        })


    }
 }


// 对评论内容进行分页展示
// p为页数，比如第一页传递0，第二页传递为1，s为每页显示多少条记录
// function paginationCommetn(p, s, filename)
function paginationCommetn(filename) {
    return (req, res) => {
        fs.readFile(`mock/data/${filename}.json`, function(err, data) {
            if (err) {
                console.log(err)
            } else {
                var comments = data.toString();
                comments = JSON.parse(comments);
                var result = { "status": 0, "message": [] };
                // 获取读取的数据的长度。
                var length = comments.message.length;
                for (var i = 0; i < length; i++) {
                    if (comments.message[i].category_id === Number(req.params.id)) {
                        result.message.push(comments.message[i]);
                    }
                }
                var p = Number(req.query.page); //页数
                var s = Number(req.query.pageSize); //每页记录数

                var pageComments = result.message.slice(s * p, (p + 1) * s);
                result = { "status": 0, "message": pageComments, "totalCount": result.message.length };
                return res.json(result);
            }
        })
    }
}
// 分页加载商品数据
function paginationProduct(filename) {
    return (req, res) => {
        fs.readFile(`mock/data/${filename}.json`, function(err, data) {
            if (err) {
                console.log(err)
            } else {
                var products = data.toString();
                products = JSON.parse(products);
                var result = { "status": 0, "message": [] };
                // 获取读取的数据的长度。
                var length = products.message.length;
                for (var i = 0; i < length; i++) {

                    result.message.push(products.message[i]);

                }
                var p = Number(req.query.page); //页数
                 p = p - 1; //p为0表示第一页。（传递过来的值为1，所以这里需要减1）
                // console.log('p=', p);
                // var s = Number(req.query.pageSize); //每页记录数
                var pagePrdoucts = result.message.slice(3 * p, (p + 1) * 3);
                result = { "status": 0, "message": pagePrdoucts, "total": result.message.length,"page_size":3,"page":Number(req.query.page)};
                return res.json(result);
            }
        })
    }
}
// 获取购物车中商品信息
function fromCartProduct(filename) {
    return (req, res) => {
        fs.readFile(`mock/data/${filename}.json`, function(err, data) {
            // console.log("ids=", req.params.ids);
            var result = { "status": 0, "message": [] };
            var products = data.toString();
            products = JSON.parse(products);
            var strIds = req.params.ids;

            for (var i = 0; i < products.message.length; i++) {
                if (strIds.indexOf(products.message[i].id) != -1) {
                    result.message.push(products.message[i])
                }
            }

            return res.json(result);
        })
    }
}

const proxy = {
	 changeOrigin: true,
    'GET /api/showHome': fromJSONFile('showHome'),
    'GET /api/newList': fromJSONFile('newList'),
    'GET /api/newDetail/:id': fromJSONDetailFile('newDetail'),
    'GET /api/getImageCategory': fromJSONFile('getImageCategory'),
    'GET /api/getImages/:id': fromJSONDetailFile('getImageList', "imgCategory"),
    'GET /api/getThumImage/:id': fromJSONDetailFile('getThumImages'),
    'GET /api/getImageInfo/:id': fromJSONDetailFile('getImageInfo'),
    // 获取所有的评论内容（没有分页）
    // 'GET /api/getComments/:id': fromJSONDetailFile('getComments', 'imgCategory'),
    'POST /api/addComments/:id': addCommentJson('getComments'),
    // 下面的请求作为测试分页
    // 'GET /api/getComments/:id': paginationCommetn(0, 2, 'getComments'),
    // 获取分页数据(评论内容)
    'GET /api/getComments/:id': paginationCommetn('getComments'),
    // 加载所有的商品数据（最开始测试使用）
    'GET /api/getProductList': fromJSONFile('goodProductList'),
    //'GET /api/getProductList': paginationProduct('goodProductList'),
    // 获取产品详情页中的轮播图片。
    'GET /api/showProductSwipe/:id': fromJSONDetailFile('getProductDetailSwiper', 'imgCategory'),
    // 获取商品详情
    'GET /api/getProductInfo/:id': fromJSONDetailFile('goodProductInfo'),
    // 获取购物车中商品信息。
    'GET /api/getCartProductInfo/:ids': fromCartProduct('goodProductList'),
	// 获取用户的基础信息
	'GET /api/getUserList': fromJSONFile('getUserList'),
	'POST /api/addProduct': addProductJson('goodProductList')
};
module.exports = proxy;