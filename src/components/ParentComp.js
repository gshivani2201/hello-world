import React, { PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Shivani'
      }
    }

    PureComponentDidMount() {
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
            <PureComp name={this.state.name}/>
            <RegComp name={this.state.name}/>
        </div>
    )
  }
}

export default ParentComp