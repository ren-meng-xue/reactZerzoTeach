import React, { Component } from 'react';
import hello from './index.module.css'//样式模块化
export default class Hello extends Component {
  render () {
    return <h2 className={hello.titleName}>我是hello组件</h2>
  }
}

