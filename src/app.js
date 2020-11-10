import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'
import Block from './components/block.js'

class App extends React.Component {
    constructor(props){
        super(props)

        this.inputRef = React.createRef();
        this.btnClearRef = React.createRef();

        this.clickedBlocks = [];
        this.columns = [];
        this.intervals = [];

        this.currentColumn = 0;
    }

    componentDidMount() {
        for(let i = 0; i < 8; i++){
            let currentColumn = []
            for(let a = i; a <= i + 32; a += 8){
                currentColumn.push(document.getElementById(a))
            }

            this.columns.push(currentColumn)
        }
        console.log(this.columns)

        document.body.addEventListener('click', (e)=>{
            if(e.target.id % 1 == 0){
                if(this.clickedBlocks.includes(e.target) == false){
                    this.clickedBlocks.push(e.target)
                    e.target.style.border = "solid red"
                }else{
                    let indexToDelete = this.clickedBlocks.indexOf(e.target)
                    this.clickedBlocks.splice(indexToDelete, 1)
                    e.target.style.border = "solid black"
                }
                console.log(this.clickedBlocks)
            }
        })

        this.btnClearRef.current.addEventListener('click', ()=>{
            this.clickedBlocks.forEach((block)=>{
                block.style.border = 'solid black'
            })

            this.clickedBlocks = []
            console.log('cleared!')
        })

        this.inputRef.current.addEventListener('input', ()=>{
            for(let i = 0; i < this.intervals.length; i++){
                window.clearInterval(this.intervals[i])
            }
    
            this.intervals.push(setInterval(()=>{
                if(this.currentColumn < 7){
                    this.currentColumn++
                }else{
                    this.currentColumn = 0
                }

                console.log(this.columns[this.currentColumn])
            }, 60000 / this.inputRef.current.value))
        })
    }
    
    componentWillUnmount() {
        document.body.removeEventListener("click");
        this.inputRef.current.removeEventListener("input")
        this.btnClearRef.current.removeEventListener("click")
    }

    render(){

        const elements = new Array(40);
        const items = []
        for (const [index] of elements.entries()) {
            items.push(<Block id={index}></Block>)
        }

        return(
            <>
                <input ref={this.inputRef} min="20" max="400" type="range" id="bpmInput"></input>
                <button ref={this.btnClearRef} id="btnClear">clear</button>

                <div id="wrap">
                    {items}
                </div>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('App'))