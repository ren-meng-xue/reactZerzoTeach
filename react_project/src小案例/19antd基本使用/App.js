import React, { Component } from 'react'
import { Button, Space } from 'antd';
export default class App extends Component {
  render () {
    return (
      <Space wrap>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Space>
    )
  }
}
