import React from 'react';
import './App.css';
import Main from './components/main';
import Secret from './components/secret';
import Notfound from './components/notfound';
import Callback from './components/callback';



class App extends React.Component{
  constructor(){
    super()
  }

render(){
  let mainComponent=""
  switch(this.props.location){
    case "":
      mainComponent = <Main {...this.props}/>
      break;
    case "callback":
      mainComponent = <Callback />
      break;
    case "secret":
      mainComponent= <Secret />
      break;
    default:
      mainComponent= <Notfound />
  }
  return(
    <div className="App">
      <h1>{this.props.name}</h1>
      {mainComponent}
    </div>
  )
}


}

export default App;
