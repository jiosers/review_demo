// 导入snabbdom
import { h, init } from 'snabbdom'

// 创建patch 函数
const patch = init([]);

let vnode = h('div#container', [
    h('h1', 'hello snabbdom'),
    h('p', '我是 p 标签')
])
const app = document.querySelector('#app')

let oldVode = patch(app, vnode)

setTimeout(() => {
    var newVnode = h('div#container', [
        h('h1', 'hello snabbdom 1'),
        h('p', '我是 p1 标签') 
    ])

    patch(oldVode, newVnode)

    //patch(newVnode, h('!'))
}, 2000)