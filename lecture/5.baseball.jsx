import React, {Component} from 'react';
import Try from './5.try'

function getNumbers(){
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array= [];
    for (let i=0; i<4; i++){
        const chosen = candidate.splice(Math.floor(Math.random()*(9-i)), 1)[0]
        array.push(chosen)
    }
    return array;
}
class Baseball extends Component{
    state = {
        result:'',
        value:'',
        answer: getNumbers(),
        tries:[],
    };
    
    onSubmitForm = (e) => {
        // this.state 생략가능
        // const { value, answer, tries } = this.state;
        
        e.preventDefault();
        if(this.state.value === this.state.answer.join('')){
            // this.setState({
            //     result: '홈런',
            //     // tries.push 쓰면 render 실행되지 않아서 감지 안됨 
            //     tries: [...this.state.tries, {try: this.state.value, result:'홈런'}]
            // })
            this.setState((prevState) =>{
                return{
                    result: '홈런',
                    // tries.push 쓰면 render 실행되지 않아서 감지 안됨 
                    tries: [...prevState.tries, {try: this.state.value, result:'홈런'}]
                }
            })
            
            alert("restart")
            this.setState({
                value:'',
                answer: getNumbers(),
                tries: []
            })
        }
        else {
            const answerArray = this.state.value.split('').map( (v) => parseInt(v));
            let strike = 0
            let ball = 0
            if(this.state.tries.length >= 9){
                this.setState({
                    result: `10번 넘게틀림. 답은 ${this.state.answer.join(',')}!`
                });
                alert("다시 시작");
                this.setState({
                    value:'',
                    answer: getNumbers(),
                    tries: []
                })
            }
            else{
                for(let i=0; i<4; i++){
                    if(answerArray[i] === this.state.answer[i]){
                        strike += 1
                    }
                    else if(this.state.answer.includes(answerArray[i])){
                        ball += 1
                    }
                }
                // this.setState({
                //     tries: [...this.state.tries, { try: this.state.value, result: `${strike} strike, ${ball} ball!`}],
                //     value:''
                // })
                this.setState((prevState) =>{
                    return{
                        value: '',
                        // tries.push 쓰면 render 실행되지 않아서 감지 안됨 
                        tries: [...prevState.tries, { try: this.state.value, result: `${strike} strike, ${ball} ball!`}],
                    }
                })
            }
        }
    }
    onChangeInput = (e) => {

    }

    onChangeInput = (e) => { 
        this.setState({ value:e.target.value }) 
    }

    render (){
        return (
            <div>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도: {this.state.tries.length}</div>
                {/* for문 */}
                {/* <ul>
                    {['like1', 'like2', 'like3'].map( (v)=>{
                        return(
                            <li>{v}</li>
                        )
                    })}
                </ul> */}

                <ul>
                    {this.state.tries.map ( (v, idx) => {
                        // => 함수는 return 생략가능.
                        return(
                            // key는 고유해야함 (성능 최적화)
                            // <li key={v.name + v.vlaue}> {idx+1}. {v.name}  - {v.value}</li>

                            // component 사용
                            // <Try key={v.name + v.vlaue} v={v} idx={idx} />
                            <Try key={ `${idx+1}`} tryInfo={v} />
                        )
                    })}
                </ul>

            </div>
        )
    }
}

export default Baseball;
// module.exports = Baseball
