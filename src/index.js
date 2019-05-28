import React from 'react'
import ReactDOM from 'react-dom'

import './styles/app.scss'
import * as index from './index.module.scss'
import Page from './components/Page'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Page />
        hello
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
