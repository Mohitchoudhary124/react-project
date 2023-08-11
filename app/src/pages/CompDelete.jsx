import React, { Component } from 'react'

export default class CompDelete extends Component {
    componentWillUpdate(){//it's just before rendering the component
   alert("deleted component");
}
  render() {
    return (
      <div>CompDelete</div>
    )
  }
}
