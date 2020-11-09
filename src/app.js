import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'
import Block from './components/block.js'

class App extends React.Component {
    constructor(props){
        super(props)

        this.appRef = React.createRef()
    }

    componentDidMount() {
        document.body.addEventListener('click', (e)=>{
            //this.blockRef.current.style.border = 'solid green'
            console.log(e.target)
            //console.log(this.appRef.current)
        })
    }
    
    componentWillUnmount() {
        document.body.removeEventListener("click");
    }

    render(){
        const elements = new Array(40);

        const items = []

        for (const [index] of elements.entries()) {
            let classString = ''

            if(index < 8){
                classString = 'block row1'
            }else if(index < 16 && index >= 8){
                classString = 'block row2'
            }else if(index < 24 && index >= 16){
                classString = 'block row3'
            }else if(index < 32 && index >= 24){
                classString = 'block row4'
            }else if(index < 40 && index >= 32){
                classString = 'block row5'
            }
            
            items.push(<Block class={classString} id={index}></Block>)
        }

        return(
            <div id="wrap" ref={this.appRef}>
                {items}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('App'))