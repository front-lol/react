// import React, { Component } from 'react';
// class Try extends Component{
//     render(){
//         return(
//             // props 필요
//             // <li> {this.props.idx+1}. {this.props.v.name}  - {this.props.v.value}</li>
//             <li>
//                 <div>{this.props.tryInfo.try}</div>
//                 <div>{this.props.tryInfo.result}</div>
//             </li>
            
//         )
//     }
// }

// hooks

// PureComponent: memo
// import React, {PureComponent, memo} from 'react';
// const Try = memo (({tryInfo}) => {
//     return(
//         <li>
//             <div>{tryInfo.try}</div>
//             <div>{tryInfo.result}</div>
//         </li>
//     )
// });
import React from 'react';
const Try = ({tryInfo}) => {
    // props (tryInfo)는 child에서 바꿀수없음
    // 바꿔야한다면 props를 child 내 state로 받아서 사용
    // const [result, setResult] = useState(tryInfo.result);
    // const onClick = () => {
    //     setResult('1')
    // }
    return(
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>

            {/* props -> state(result)로 받아서 result값 변경  */}
            {/* <div onClick={onClick}>{result}</div> */}
        </li>
    )
};

export default Try;