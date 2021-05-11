import React from  'react';
import TasksContainer from './components/taskscontainer';
import 'semantic-ui-css/semantic.min.css';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <TasksContainer />
      </DndProvider>
    </div>
  );
}

export default App;
