import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'

import './styles/app.scss'
import Header from './components/Header'
import Landing from './pages/LandingPage'
import Notepad from './pages/Notepad'

import rootReducer from './utils/reducers'

const store = createStore(rootReducer)

class App extends React.Component {
  onDragEnd = result => {
    store.dispatch({ type: 'SWAP_ITEMS', result })
  };

  render() {
    return (
      <Provider store={store}>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Router>
            <Switch>
              <Route path='/' exact component={Landing} />
              <Header />
            </Switch>
            <Route path='/notes' component={Notepad} />
          </Router>
        </DragDropContext>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));