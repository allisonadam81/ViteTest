import React from 'react'
import { ToDoListType, SetToDoListType } from '../types';
import LineItem from './LineItem';

type LineItemContainerProps = {
  toDoList: ToDoListType,
  setToDoList: SetToDoListType
}

const LineItemContainer: React.FC<LineItemContainerProps> = ({ toDoList, setToDoList }) => {

  return (
    <div>
      {toDoList.map((todo: string, i: number) => <LineItem
        key={`lineitemcontainer-${todo}`}
        i={i} setToDoList={setToDoList}
        todo={todo}
      />)}
    </div>
  )
}

export default LineItemContainer