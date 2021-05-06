
import a from './a';
import './css/index.css'
import './css/a.css';
import './less/index.less'
// import 'antd/dist/antd.css'
import axios from 'axios'


axios.get('/api/getUserInfo').then(res=>{
    console.log(res)
})

// if (module.hot) {
//     module.hot.accept('./a.js', function() {
//       console.log('hotmodule.js更新了');
//     //  import/export语法必须在顶级作用域中使用,无法在自己作用域中使用
//       let str = require('./a.js')
//       console.log(str)
//     })
//   }
console.log(IS_DEV)
console.log('12')
