import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DragDropContext } from 'react-beautiful-dnd'

import './styles/app.scss'
import Header from './components/Header'
import Landing from './pages/LandingPage'
import Notepad from './pages/Notepad'

import lists from './data/lists.data'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lists,
    }
  }

  onBeforeDragStart = () => {
    /*...*/
  };

  onDragStart = () => {
    /*...*/
  };
  onDragUpdate = () => {
    /*...*/
  };
  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    const { lists } = this.state

    // Ends up in original position
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Swap indexes
    const list = lists[source.droppableId];
    let newTaskIds = Array.from(list.taskIds)
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newList = {
      ...list,
      taskIds: newTaskIds,
    }

    this.setState({
      lists: {
        ...this.state.lists,
        [newList.id]: newList
      }
    })
  };

  render() {
    const MyNotepad = () => <Notepad lists={this.state.lists} />

    return (
      <DragDropContext
        // onBeforeDragStart={this.onBeforeDragStart}
        // onDragStart={this.onDragStart}
        // onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        <Router>
          <Switch>
            <Route path='/' exact component={Landing} />
            <Header />
          </Switch>
          <Route path='/notes' render={MyNotepad} />
        </Router>
      </DragDropContext>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));