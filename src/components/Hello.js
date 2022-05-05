import React from 'react'

function Hello() {
//   return (
//     <div id='hello' className = 'dummyClass'>
//         <h1>Hello JSX</h1>
//     </div>
//   )
    return React.createElement(
        'div', 
        {id: 'hello', className : 'dummyClass'}, 
        React.createElement('h1', null, 'Hello World')
    )
}

export default Hello