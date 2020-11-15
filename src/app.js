import React from 'react'
import ReactDOM from 'react-dom'

import sounds from './sounds.js'
import './style.scss'
import Block from './components/block.js'

class App extends React.Component {
    constructor(props){
        super(props)

        this.inputRef = React.createRef();
        this.btnClearRef = React.createRef();
        this.state = { bpm: 0 }

        this.clickedBlocks = [];
        this.columns = [];
        this.rows = [];
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

        for(let i = 0; i <= 32; i += 8){
            let currentRow = []
            for(let a = i; a <= i + 7; a++){
                currentRow.push(document.getElementById(a))
            }

            this.rows.push(currentRow)
        }

        document.body.addEventListener('click', (e)=>{
            if(e.target.id % 1 == 0){
                if(this.clickedBlocks.includes(e.target) == false){
                    this.clickedBlocks.push(e.target)
                    e.target.style.background = "#ffffff80"
                }else{
                    let indexToDelete = this.clickedBlocks.indexOf(e.target)
                    this.clickedBlocks.splice(indexToDelete, 1)
                    e.target.style.background = "transparent"
                }
            }
        })

        this.btnClearRef.current.addEventListener('click', ()=>{
            this.clickedBlocks.forEach((block)=>{
                block.style.background = "transparent"
            })

            this.clickedBlocks = []
        })

        this.inputRef.current.addEventListener('input', ()=>{
            this.setState({bpm: this.inputRef.current.value})

            for(let i = 0; i < this.intervals.length; i++){
                window.clearInterval(this.intervals[i])
            }
    
            this.intervals.push(setInterval(()=>{
                if(this.currentColumn < 7){
                    this.currentColumn++
                }else{
                    this.currentColumn = 0
                }

                for(let i = 0; i < this.clickedBlocks.length; i++){
                    if(this.columns[this.currentColumn].includes(this.clickedBlocks[i])){
                        for(let a = 0; a < this.rows.length; a++){
                            if(this.rows[a].includes(this.clickedBlocks[i])){
                                sounds[a].play() 
                                setTimeout(()=>{sounds[a].stop()}, 100)
                            }
                        }
                    }
                }
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
                <div id="menu">
                    <input className="menuItem" ref={this.inputRef} min="20" max="400" type="range" id="bpmInput"></input>
                    <h3 className="menuItem">{this.state.bpm}</h3>
                    <button className="menuItem" ref={this.btnClearRef} id="btnClear">clear</button>
                </div>

                <div id="colors">
                    <div id="row1" className="row"></div>
                    <div id="row2" className="row"></div>
                    <div id="row3" className="row"></div>
                    <div id="row4" className="row"></div>
                    <div id="row5" className="row"></div>
                </div>

                <div id="wrap">
                    {items}
                </div>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('App'))