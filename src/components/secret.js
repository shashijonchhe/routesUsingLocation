import React from 'react';
import frodo from '../images/frodo.jpg';


export default class Secret extends React.Component{
    render(){
        return(
            <div>
                <h2>I am coming from Secret Component</h2>
                <img src={frodo}></img>
                <br/>
                <button onClick={this.props.auth.logout}>LOG OUT</button>
            </div>
        )
    }
}






