import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";

import './styles/app.scss'
import * as index from './index.module.scss'
import Landing from './pages/LandingPage'
import Notepad from './pages/Notepad'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/' exact component={Landing} />
        <Route path='/notes' component={Notepad} />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
