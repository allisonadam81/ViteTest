import React, { useState } from 'react';
import { ToDoListType } from '../types';

import LineItemContainer from './LineItemContainer';
import Form from './Form';

// import './App.css'

const App: React.FC<{}> = () => {

  const [ toDoList, setToDoList ] = useState<ToDoListType>([])

  return (
    <div>
      <Form
      setToDoList={setToDoList}
      />
      <LineItemContainer
      toDoList={toDoList}
      setToDoList={setToDoList}
      />
    </div>
  )
}

export default App
