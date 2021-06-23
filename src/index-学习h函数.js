import { init } from 'snabbdom/init';
import { classModule } from 'snabbdom/modules/class';
import { propsModule } from 'snabbdom/modules/props';
import { styleModule } from 'snabbdom/modules/style';
import { eventListenersModule } from 'snabbdom/modules/eventlisteners';
import { h } from 'snabbdom/h';

// 创建patch函数 让虚拟节点上树
const patch=init([classModule,propsModule,styleModule,eventListenersModule]);



// 创建虚拟节点1
let myVnode1=h(
  'a',//标签
  {props:{href:'http:dizhi',target:'_blank'}},//属性
  '1234');//data数据
console.log(myVnode1);
// 创建虚拟节点2
let myVnode2=h(
  'div',//标签
  {class:{'box1':true}},//属性
  'divDemo');//data数据
console.log(myVnode2);
// 创建虚拟节点3 嵌套 树
let myVnode3=h('ul',[
    h('li','生蚝'),
    h('li','羊排'),
    h('li','脑花'),
    h('li','鸡翅'),
  ]);//data数据
console.log(myVnode3,'3333');


// 让虚拟节点上树
const container=document.getElementById('container');
// patch(container,myVnode1);
patch(container,myVnode3);



