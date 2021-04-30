import React, { Component } from 'react';

class ResponseCheck extends Component {
    state = {
        state: 'waiting',
        message: 'click!',
        result: []
    }
    timeout;
    startTime;
    endTime;
    onClickScreen = () => {
        const { state, message, result } = this.state;
        if(state === 'waiting'){
            this.setState({
                state:'ready',
                message: ' click to green '
            })
            this.startTime = new Date()
            
            this.timeout = setTimeout( ()=>{
                this.setState({
                    state:'now',
                    message: 'CLICK NOW !'
                })
            }, Math.floor(Math.random() * 1000)+2000)
        }
        else if(state  === 'ready'){
            // timeout 초기화
            clearTimeout(this.timeout)
            this.setState({
                state:"waiting",
                message:'fail'
            })
        }
        else if(state === 'now'){
            this.endTime = new Date()
            this.setState((prevState) => {
                return{
                    state:'waiting',
                    message:'click!',
                    result:[...prevState.result, this.endTime - this.startTime]    
                }
            })
        }
    }

    renderAverage = () => {
        const { result } =this.state;
        return result.length === 0 
            ? null 
            :<div>평균시간: {result.reduce((a,c)=> a+c) / result.length}ms</div>
    }

    render(){
        return (
            <div >
                <div id="screen" className={this.state.state} onClick={this.onClickScreen}>
                    {this.state.message}
                </div>
                {this.renderAverage()}

                {/* render 안에서 if 사용: 즉시실행 함수 */}
                {/* {(()=>{
                    if(this.state.result.length === 0){
                        return null;
                    }
                    else{
                        return <div>평균시간: {this.state.result.reduce((a,c)=> a+c) / this.state.result.length}ms</div>
                    }
                })()} */}
            </div>
        )
    }
}

export default ResponseCheck;