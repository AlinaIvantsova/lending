import React, {Component} from 'react';
import './App.css';
import Header from "./component/header";
import Algorithm from "./component/algorithm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="page-wrapper">
          <Header/>
          <Algorithm/>
        </div>
      </div>
    );
  }
}

export default App;
