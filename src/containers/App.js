import React, { Component } from "react";
import { Element} from 'react-scroll'
import Header from "../components/Header/Header";
import Main1 from "../components/Main/Main1";
import Main2 from "../components/Main/Main2";
import Main3 from "../components/Main/Main3";
import Main4 from "../components/Main/Main4";
import './App.css';
import 'tachyons';

class App extends Component {
    constructor() {
      super()
      this.state = {
          route: ''
      }
    }
    render() {
      return (
        <div className="App">
          <Header/>
          <Main1 id="Home"/>
          <Main2 id="About"/>
          <Main3 id="Skills"/>
          <Main4 id="Projects"/>
        </div>
      );
    }
}

export default App;
