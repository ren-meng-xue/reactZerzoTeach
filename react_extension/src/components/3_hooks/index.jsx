import React from 'react'
import { createRoot } from 'react-dom/client'
/**
 * 类组件
class Demo extends Component.Component {
  state = {
    count: 0
  }
  addMe = () => {
    //函数式声明
    // this.setState((state) => {
    //   return { count: state.count + 1 }
    // })
  }
  render() {
    return (
      <div>
        <h2>当前求和为{this.state.count}</h2>
        <button onClick={this.addMe}>点我+1</button>
      </div>
    )
  }
}

 */

// 函数组件 连自己的this都没有

function Demo() {
  // console.log('Demo');
  const [count, setCount] = React.useState(0);
  // console.log(count, setCount);
  const [namesTitle, setName] = React.useState('hh');

  const myRef = React.useRef()
  React.useEffect(() => {
    console.log('@');
    let timer = setInterval(() => {
      setCount((count) => count + 1)//第二种功能写法
    }, 1000);
    return () => {
      console.log('#$');
      clearInterval(timer)
      //相当于componentWillUnmount
    }
  }, [])
  //jia的回调
  function addMe() {
    console.log('add');
    setCount(count + 1)//第一种功能写法
    // setCount((count) => count + 1)//第二种功能写法
  }
  //更改名字
  function changeMyname() {
    // setName('Jack')
    setName((namesnamesTitleTitle) => {
      console.log(namesnamesTitleTitle, 'namesnamesTitleTitle');
      return 'mingzi123'
    })
  }
  //卸载
  function unmount() {
    const root = createRoot(document.getElementById('root'));
    root.unmount()
  }
  //提示数据
  function show() {
    alert(myRef.current.value)
  }
  return (
    <div>
      <input type='text' ref={myRef} />
      <h2>当前求和为{count}</h2>
      <h2>我的名字是{namesTitle}</h2>
      <button onClick={addMe}>点我+1</button>
      <button onClick={changeMyname}>改变名字</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点击提示数据</button>
    </div>
  )
}
export default Demo