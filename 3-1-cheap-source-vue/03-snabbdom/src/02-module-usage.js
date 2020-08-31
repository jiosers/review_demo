import { h, init } from 'snabbdom'

// 导入模块
import  style from 'snabbdom/modules/style'
import  eventlisteners from 'snabbdom/modules/eventlisteners'

const patch = init([style, eventlisteners])
const app = document.querySelector('#app')
const handler = () => {
    console.log('click me')
}
let vnode = h('div#container', [
    h('h1', {
        style: {
            color: 'red'
        },
        on: {
            click: handler
        }
    }, 'hello'),
    h('p', '我是p标签')
])

patch(app, vnode)





