import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Shivani'
      }
      console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB static getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

  render() {
    console.log('LifecycleB render')
    return (
      <div>
          Lifecycle A
      </div>
    )
  }
}

export default LifecycleB