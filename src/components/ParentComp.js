import React, { Component } from 'react'
import MemoComp from './MemoComp'

class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Shivani'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Shivani'
            })
        }, 2000)
    }

  render() {
    console.log('*****PARENT COMP RENDER******')
    return (
        <div>
            ParentComp
            <MemoComp name={this.state.name}/>
        </div>
    )
  }
}

export default ParentComp