import React from 'react'

// function Greet() {
//     return <h1>Hello Shivani</h1>
// }

const Greet = (props) => {
    const {name, heroName} = props
return (
    <h1>Hello {name} aka {heroName}</h1>
)
}

export default Greet