import React from 'react';
// import { render } from 'react-dom';


export default class Main extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}<br/>
                    Do you want to see the secret list? <a href="/secret">CLick to go secret </a>
                </h1>

                <div>
                    <br/>
                    <br/>
                    Please Login To Enter
                    <br/>
                    <button onClick={this.props.auth.login}>Login</button>

                </div>
            </div>
        )
    }
}