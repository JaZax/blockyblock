import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'
import Block from './components/block.js'

class App extends React.Component {
    constructor(props){
        super(props)

        this.inputRef = React.createRef()
        this.clickedBlocks = []
    }

    componentDidMount() {
        document.body.addEventListener('click', (e)=>{
            if(this.clickedBlocks.includes(e.target) == false){
                this.clickedBlocks.push(e.target)
            }else{
                let indexToDelete = this.clickedBlocks.indexOf(e.target)
                this.clickedBlocks.splice(indexToDelete, 1)
            }
            console.log(this.clickedBlocks)
        })

        this.inputRef.current.addEventListener('input', ()=>{
            console.log(this.inputRef.current.value)
        })
    }
    
    componentWillUnmount() {
        document.body.removeEventListener("click");
        this.inputRef.current.removeEventListener("input")
    }

    render(){
        const elements = new Array(40);
        const items = []
        for (const [index] of elements.entries()) {
            items.push(<Block id={index}></Block>)
        }

        return(
            <>
                <input ref={this.inputRef} min="20" max="200" type="range"></input>

                <div id="wrap">
                    {items}
                </div>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('App'))