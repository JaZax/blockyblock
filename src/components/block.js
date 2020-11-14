import React from 'react'

class Block extends React.Component {

    constructor(props){
        super(props)

        //this.blockRef = React.createRef();
        //this.idString = ''

    }

    /*
    componentDidMount() {
        this.blockRef.current.addEventListener('click', ()=>{
            //this.blockRef.current.style.border = 'solid green'
            console.log(this.blockRef.current.id)
        })
    }
    
    componentWillUnmount() {
        this.blockRef.current.removeEventListener("click");
    }
    */

    render(){
        return(
            <div ref={this.blockRef} className="block" id={this.props.id}>
                {/*
                    <h1>{this.props.id}</h1>
                */}
            </div>
        )
    }
}

export default Block