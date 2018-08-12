let url = {
    hotLists:   '/index/hotLists',
    banner:     '/index/banner',
    topList:    '/category/topList',
    subList:    '/category/subList',
    rank:       '/category/rank',
    searchList: '/search/list',
    details:    '/goods/details',
    deal:       '/goods/deal',
    cartAdd:    '/cart/add',
    cartLists:  '/cart/list',
    cartReduce: '/cart/reduce',
    cartRemove: '/cart/remove',
    cartMremove:'/cart/mremove'
}
//开发环境 和 生产环境切换的url
//IP接口 和 
let host = 'http://rap2api.taobao.org/app/mock/7058';

for (let key in url) {
    if (url.hasOwnProperty(key)) {
        url[key] = host + url[key];
    }
}

export default url;