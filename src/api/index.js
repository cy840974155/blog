import request from '@/utils/request'

export function fetchMenus(params) {
    return request({
        url: '/index/Menu/index',
        method: 'get',
        params: params
    })
}

export function fetchList(params) {
    return request({
        url: '/index/Index/index',
        method: 'get',
        params: params
    })
}

export function fetchFocus() {
    return request({
        url: '/focus/list',
        method: 'get',
        params: {}
    })
}

export function fetchCategory() {
    return request({
        url: '/category',
        method: 'get',
        params: {}
    })
}

export function fetchFriend() {
    return request({
        url: '/friend',
        method: 'get',
        params: {}
    })
}

export function fetchSocial() {
    return request({
        url: '/index/Site/index',
        method: 'get',
        params: {}
    });
}

export function fetchSiteInfo() {
    return request({
        url: '/index/User/index',
        method: 'get',
        params: {}
    })
}

export function fetchComment() {
    return request({
        url: '/comment',
        method: 'get',
        params: {}
    })
}
export function fetchArticle($params){
    return request({
        url:'/index/Index/article',
        method:'get',
        params: $params
    })
}
