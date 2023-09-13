
// 该文件专门为Count组件生成action对象,目的只有一个，防止编码的时候代码写错
//同步action 就是指action的值为Object类型的一般对象
//异步action，就是指action的值为函数
import { INCREMENT, DECREMENT } from "./constant"
export const createIncrementAction = data => (
  //返回的是一般对象，所以是同步action
  {
    type: INCREMENT, data
  })

export const createDecrementAction = data => ({
  type: DECREMENT, data
})



export const createIncrementAsyncAction = (data, time) => {
  //返回的是函数，所以是异步action
  //因为函数里面能开启异步任务
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, 500);
  }
}