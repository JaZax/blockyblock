import React from 'react'
import ReactDOM from 'react-dom'
import { gsap } from 'gsap'

import './style.scss'
import Block from './components/block'

class App extends React.Component {
    render(){
        const elements = new Array(20);

        const items = []

        for (const [index] of elements.entries()) {
            items.push(<Block id={index}></Block>)
        }

        return(
            <>
                {items}
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('App'))