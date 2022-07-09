const Mock = require('mockjs');
export default [
    // 站点信息
    {
        url: '/site',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: {
                    avatar: 'http://profile.chuxuankq.top:39998/static/picture/header.jpg',
                    slogan: '道阻且长，行则将至',
                    name: 'FZY′blog',
                    domain: 'https://www.fengziy.cn',
                    notice: '本博客的Demo数据由Mockjs生成',
                    desc: '一个It技术的探索者'
                }
            }
        }
    },
    // 站点社交信息
    {
        url: '/social',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: [
                    {
                        id: 2,
                        title: 'Gitee',
                        icon: 'icongitee',
                        color: '#d81e06',
                        href: 'https://gitee.com/chen_yu_php'
                    },
                    {
                        id: 3,
                        title: 'GitHub',
                        icon: 'icongithub',
                        color: '',
                        href: 'https://github.com/cy840974155'
                    },
                    {
                        id: 4,
                        title: 'CSDN',
                        icon: 'iconcsdn',
                        color: 'red',
                        href: 'https://blog.csdn.net/weixin_50491125'
                    }
                ]
            }
        }
    }
]