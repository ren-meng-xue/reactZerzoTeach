import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  getStudentData = () => {
    axios.get('http://localhost:3000/api1/students').then((response) => {
      console.log(response.data);
    }, error => {
      console.log(error);
    })
  }
  getStudentCar = () => {
    axios.get('http://localhost:3000/api2/cars').then((response) => {
      console.log(response.data);
    }, error => {
      console.log(error);
    })
  }
  render () {
    return (
      <div>
        <button onClick={this.getStudentData}>获取学生数据</button>
        <button onClick={this.getStudentCar}>获取汽车数据</button>
      </div>
    )
  }
}
