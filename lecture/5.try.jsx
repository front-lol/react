import React, { Component } from 'react';

class Try extends Component{
    render(){
        return(
            // props 필요
            <li> {this.props.idx+1}. {this.props.v.name}  - {this.props.v.value}</li>
        )
    }
}

export default Try;