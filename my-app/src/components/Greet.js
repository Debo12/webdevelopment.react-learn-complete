// Functional Component
// Tutorial 5

import React from 'react' // always import in anyomponent

// function Greet(){
//     return <h1>Hello Debojyoti</h1>
// }

const Greet = props => {
    return(
        <div>
            <h1>
                Hello {props.name} a.k.a {props.heroName}
            </h1>
            {props.children}
        </div>
    )
} 

export default Greet