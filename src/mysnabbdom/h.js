import vnode from "./vnode";

/*
 *sel：标签
 *data：属性
 *c：'文字'|[]|h()
 */
// 1.形态：h('div',{},'文字')
// 2.形态：h('div',{},[])
// 3.形态：h('div',{},h())
export default function (sel, data, c) {
  // 判断参数个数
  if (arguments.length < 3) throw new Error('h函数需要输入3个参数');
  if (typeof c == 'string' || typeof c == 'number') {
    return vnode(sel, data, undefined, c, undefined);
  } else if (Array.isArray(c)) {
    // 说明现在调用h函数的是形态2
    let children = [];
    // 遍历c
    for (let i = 0; i < c.length; i++) {
      // 检查c[i]必须是一个对象，如果不满足
      if (!(Object.prototype.toString.call(c[i]) == '[object Object]' && c[i].hasOwnProperty('sel'))) throw new Error('传入的数组参数中有项不是h函数');
      // 收集
      children.push(c[i]);
    }
    // 循环结束了，就说明children收集完毕了，此时可以返回虚拟节点了，它是有children属性的
    return vnode(sel, data, children, undefined, undefined);
  } else if (Object.prototype.toString.call(c) == '[object Object]' && c.hasOwnProperty('sel')) {
    // 说明现在调用h函数的是形态③
    // 即，传入的c是唯一的children，不用执行c，因为调用的时候已经执行过了
    let children = [c];
    return vnode(sel, data, children, undefined, undefined);
  } else {
    throw new Error('传入第3个参数类型不对');
  }
}