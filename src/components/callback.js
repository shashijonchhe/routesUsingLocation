import React from 'react';
import Auth from '../auth';



export default class Callback extends React.Component{
    componentDidMount(){
        const auth = new Auth();
        auth.handleAuthentication();
    }
    render(){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
}