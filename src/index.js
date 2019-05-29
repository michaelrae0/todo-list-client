import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './styles/app.scss'
import Header from './components/Header'
import Landing from './pages/LandingPage'
import Notepad from './pages/Notepad'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Landing} />
          <Header />
        </Switch>
        <Route path='/notes' component={Notepad} />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));