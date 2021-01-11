import React from 'react'
import ReactDOM from 'react-dom'
import './app.scss'

export class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
            <h1>hello</h1>
            </div>

            /* how to dynamically render components
            IMAGES is just an array and could be anything
            key is how react identifies each component internally
           {IMAGES.map(image => (
          <Image source={image} key={image} />
        ))} */
        )
    }
}


