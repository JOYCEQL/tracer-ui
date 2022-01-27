

import Button from './Button'

const install =function (Vue) {
  Vue.use(Button);
}

// 判断是否直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  Button,
}

export  default install
