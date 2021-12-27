import React, { Component } from 'react'


export default class ClassComponent extends Component {
    render() {
        return <h1>Привет, {this.props.name} из класса</h1>;
      }
    }

