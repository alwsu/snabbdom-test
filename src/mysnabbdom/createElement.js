// 创建节点,将vnode创建为DOM,是孤儿节点，不插入树
export default function (vnode) {
  let domNode = document.createElement(vode.sel);
  // 判断只有子节点没文字
  if (vnode.text != '' && (vnode.children == undefined || vnode.children.length == 0)) {
    // 他内部是文字
    domNode.innerText = vnode.text;
  } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
    // 它内部是子节点
    for (let i = 0; i < vnode.children.length; i++) {
      let ch = vnode.children[i];
      let chDOM = createElement(ch);
      domNode.appendChild(chDOM);
    }
  }
  // 补充elm
  vnode.elm = domNode;

  return vnode.elm;
}