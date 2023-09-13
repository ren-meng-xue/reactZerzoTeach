
import React, { Component } from 'react';
import welcome from './index.module.css'
export default class Welcome extends Component {
  render () {
    return <h3 className={welcome.demo}>welcome组件</h3>
  }
}