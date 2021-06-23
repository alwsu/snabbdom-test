import {
  init
} from 'snabbdom/init';
import {
  classModule
} from 'snabbdom/modules/class';
import {
  propsModule
} from 'snabbdom/modules/props';
import {
  styleModule
} from 'snabbdom/modules/style';
import {
  eventListenersModule
} from 'snabbdom/modules/eventlisteners';
import {
  h
} from 'snabbdom/h';

// 创建patch函数 让虚拟节点上树
const patch = init([classModule, propsModule, styleModule, eventListenersModule]);
// 让虚拟节点上树
const container = document.getElementById('container');
let myVnode1 = h('ul', [
  h('li',{key:'1'}, '生蚝'),
  h('li',{key:'2'},'羊排'),
  h('li',{key:'3'}, '脑花'),
]);
patch(container, myVnode1);

// key服务于最小量更新

let myVnode2 = h('ul', [
  h('li',{key:'4'}, '鸡翅'),
  h('li',{key:'1'}, '生蚝'),
  h('li',{key:'2'}, '羊排'),
  h('li',{key:'3'}, '脑花'),
]);
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  patch(myVnode1, myVnode2);
})