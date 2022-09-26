// import React from 'react'

// 1st way to destructure
/*const PropDestructuring = ({name, heroName}) => {
    return(
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
    )
}*/

// 2nd way to destructure
/*const PropDestructuring = props => {
    const {name, heroName} = props
    return(
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
    )
}*/

import React, { Component } from 'react'

export class PropDestructuring extends Component {
  render() {
    const {name, heroName} = this.props
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
    )
  }
}

export default PropDestructuring