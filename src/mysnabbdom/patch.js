import vnode from "./vnode";
import createElement from "./createElement";

export default function (oldVnode, newVnode) {
  // 判断传入的第1个参数是DOM节点，是DOM节点还是虚拟节点
  if (oldVnode.sel == '' || oldVnode.sel == undefined) {
    // 传入的第1个参数是DOM节点，此时要包装为虚拟节点
    oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode);
  }

  console.log(oldVnode);
  // 判断oldVnode和newVnode是不是同一个节点
  if (oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel) {

  } else {
    let newVnodeElm = createElement(newVnode, oldVnode.elm);
    // 
    oldVnode.elm.parentNode.insertBefore(newVnodeElm);
  }
}