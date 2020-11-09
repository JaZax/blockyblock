import React from 'react'

class Block extends React.Component {

    constructor(props){
        super(props)

        this.blockRef = React.createRef();
        this.idString = ''

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
            <div ref={this.blockRef} className={this.props.class} id={this.props.id}></div>
        )
    }
}

export default Block