import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Secret from './components/secret';


class App extends React.Component{
  constructor(){
    super()
  }

render(){
  let mainComponent=""
  switch(this.props.location){
    case "":
      mainComponent = <Main />
      break;
    case "secret":
      mainComponent= <Secret />
      break;
    default:
      mainComponent= <Main />
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
