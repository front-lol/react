import { Component } from "react"

// shouldComponentUpdate  
// import { PureComponent } from "react"
// class Test extends PureComponent {

class Test extends Component {
    state = {
        counter: 0
    };
    onClick = () => {
        this.setState({})
    };
    shouldComponentUpdate(nextProps, nextState, nextContext){
        if(this.state.counter !== nextState.counter){
            // render 실행
            return true
        }
        return false;
    }

    render(){
        console.log('render', this.state)
        return (
            <div>
                <button onClick={this.onClick}>Render!</button>
            </div>
        )
    }
}

export default Test;