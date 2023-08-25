
/**
 * 
 *  {1该文件是用于创建一个为Count组件服务的reducer，本质就是一个函数
 * 2.reducer函数会接收到2个参数，分别是之前的状态(preState)，动作对象(action)} preState 
 */

const initState = 0
export default function countReducer (preState = initState, action) {
  const { type, data } = action
  if (preState == undefined) preState = 0
  //从action中，获取type、data
  //根据type决定如何加工数据
  switch (type) {
    case 'increment'://如果是加
      return preState + data
    case 'decrement'://如果是减
      return preState - data
    default:
      return preState
  }
}