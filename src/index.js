import h from "./mysnabbdom/h";
import patch from "./mysnabbdom/patch";

const mVnode1 = h('div', {}, '你好！');
const container = document.getElementById('container');

patch(container,mVnode1);