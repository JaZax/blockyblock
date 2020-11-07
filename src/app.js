import React from 'react'
import ReactDOM from 'react-dom'
import { gsap } from 'gsap'

import './style.scss'
import Block from './components/block'

class App extends React.Component {
    render(){
        return(
            <>
                <Block id="1"></Block>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('App'))