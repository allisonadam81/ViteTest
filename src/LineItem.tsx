import React from 'react';
import { SetToDoListType, ClickEvent } from '../types';

type LineItemProps = {
  i: number,
  setToDoList: SetToDoListType,
  todo: string
}

const LineItem: React.FC<LineItemProps> = ({ i, setToDoList, todo }) => {

  const onClick = (e: ClickEvent) => {
    e.preventDefault();
    setToDoList(prev => prev.filter((todo, idx) => idx !== i))
  }

  return (
    <div>
      <p>{todo}</p>
      <button onClick={onClick}>X</button>
    </div>
  )
}

export default LineItem