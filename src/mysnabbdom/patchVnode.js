import vnode from "./vnode";
import createElement from "./createElement";

export default function(oldVnode,newVnode){
  // 判断vnode是否是同一个对象
  if (oldVnode == newVnode) return;
  // 判断vnode有没有text属性
  if (newVnode.text != undefined && (newVnode.children == undefined || newVnode.children.length == 0)) { // 新vnode有text属性

    if (newVnode.text != oldVnode.text) {//新的和老的不是同一节点的text
      oldVnode.elm.innerText = newVnode.text;
    }
  } else { // 新vnode没有text属性
    if (oldVnode.children && oldVnode.children.length > 0) { //老的有children

    } else { //老的没有children
      // 清除old节点
      oldVnode.elm.innerText = null;
      // 加入新的
      for (let i = 0; i < newVnode.children.length; i++) {
        let dom = createElement(newVnode.children[i]);
        oldVnode.elm.appendChild(dom);
      }
    }
  }
}