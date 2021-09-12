const menuList = [
    {
        title: '首页',
        key: '/home'
    },
    {
        title: '常用组件',
        key: '/admin/componet',
        children: [
            {
                title: '按钮',
                key: '/admin/componet/buttons',
            },
            {
                title: '弹框',
                key: '/admin/componet/modals',
            },
            {
                title: 'Loading',
                key: '/admin/componet/loadings',
            },
            {
                title: '通知提醒',
                key: '/admin/componet/notification',
            },
            {
                title: 'Tab页签',
                key: '/admin/componet/tabs',
            }
        ]
    },
    {
        title: '表单',
        key: '/admin/form',
        children: [
            {
                title: '登录',
                key: '/admin/form/login',
            },
            {
                title: '注册',
                key: '/admin/form/reg',
            }
        ]
    },
    {
        title: '表格',
        key: '/admin/table',
        children: [
            {
                title: '基本表格',
                key: '/admin/table/basic',
            },
            {
                title: '高级表格',
                key: '/admin/table/high',
            }
        ]
    },
    {
        title: '商品管理',
        key: '/admin/product',
       
    },
    {
        title: '用户管理',
        key: '/user'
    }

 
];
export default menuList;