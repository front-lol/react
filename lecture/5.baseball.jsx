import React, {Component} from 'react';
import Try from './5.try'

function getNumbers(){
    return 1
}
class Baseball extends Component{
    state = {
        result:'',
        value:'',
        answer: getNumbers(),
        tries:[],
    };
    
    onSubmitForm = (e) => {

    }
    onChangeInput = (e) => {

    }

    onChangeInput = (e) => { 
        this.setState({ value:e.target.value }) 
    }

    dumarr = [
        { name:"사과", value:"1개"},
        { name:"감", value:"2개"},
        { name:"배", value:"3개"},
    ]

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
                    {this.dumarr.map ( (v, idx) => {
                        // => 함수쓸때 return 생략가능.
                        return(
                            // key는 고유해야함 (성능 최적화)
                            // <li key={v.name + v.vlaue}> {idx+1}. {v.name}  - {v.value}</li>

                            // component 사용
                            <Try key={v.name + v.vlaue} v={v} idx={idx} />
                        )
                    })}
                </ul>

            </div>
        )
    }
}

export default Baseball;
// module.exports = Baseball
