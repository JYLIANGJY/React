function showImage(method) {
    let res = null;
    switch (method) {
        case "GET":
            res = {
                status: 0,
                message: [{
                        id: 1,
                        img: '@/assets/lunbo/lunbo1.jpg'
                    },
                    {
                        id: 2,
                        img: '@/assets/lunbo/lunbo2.jpg'
                    },
                ]
            }
            break;
        default:
            res = null;
    }
    return res;
}