// 引入Count的ui组件
import CountUI from '../../components/Count'

//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

//引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

/**
 * 
 *1.mapStateToProps函数返回的是一个对象
 *2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件Props的value
 *mapStateToProp操作状态的方法
 */
function mapStateToProps (state) {
  return { count: state }
}
/**
 * 
1.mapDispatchToProps函数返回的是一个对象
返回的对象中的key就作为传递给UI组件props中的key，value就作为传递给UI组件props的value
mapDispatchToProps操作状态的方法
 */
function mapDispatchToProps (dispatch) {
  return {
    jia: number => dispatch(createIncrementAction(number)),
    jian: number => dispatch(createDecrementAction(number)),
    jianAsync: number => dispatch(createIncrementAsyncAction(number)),
  }
}
// b函数返回的对象中的key就作为传递给UI组件props中的key，value就作为传递给UI组件props的value--操作状态的方法
//使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

