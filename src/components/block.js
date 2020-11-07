import React from 'react'

class Block extends React.Component {

    constructor(props){
        super(props)

        this.blockRef = React.createRef();
    }

    componentDidMount() {
        this.blockRef.current.addEventListener('click', ()=>{
            console.log(this.blockRef.current.id)
        })
    }
    
    componentWillUnmount() {
        document.body.removeEventListener("click");
    }

    render(){
        return(
            <div ref={this.blockRef} className="block" id={this.props.id}></div>
        )
    }

}

export default Block