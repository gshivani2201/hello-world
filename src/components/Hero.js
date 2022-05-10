import React from 'react'

function Hero({heroName}) {
    if (heroName === 'Thanos') {
        throw new Error('not a Hero')
    }
    return (
        <div>{heroName}</div>
    )
}

export default Hero