import React from 'react'
import ReactDOM from 'react-dom'
import { gsap } from 'gsap'

import './style.scss'
import Block from './components/block'

class App extends React.Component {
    render(){
        const times = (length, fn) => Array.from({ length }, (_, i) => fn(i));

        return(
            <>
                {Array(20).fill(<Block id={this.length}/>)}
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('App'))