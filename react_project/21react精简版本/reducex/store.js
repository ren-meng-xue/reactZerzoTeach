
/**该文件专门用于一个暴露store对象，整个应用只有一个store对象 */
import { createStore } from 'redux'
// import { configureStore } from '@reduxjs/toolkit'
import countReducer from './count_reducer'
// export default configureStore({
//   reducer: {

//   }
// })

const state = {
  name: '张三',
  age: 12
}


export default createStore(countReducer)
// const reducer = (newState = state, action) => {
//   // 待处理
//   if (action.type === 'zizeng') {
//     newState.age = state.age + action.num
//   }
//   // 返回新的副本
//   return newState
// }
//暴露store
// export default configureStore({ reducer }, countReducer)