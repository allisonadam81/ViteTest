import React, { useState } from 'react';
import { ChangeEvent, FormSubmit, SetToDoListType } from '../types';

type FormProps = {
  setToDoList: SetToDoListType
}

const Form: React.FC<FormProps> = ({ setToDoList }) => {

  const [ todo, setTodo ] = useState<string>('');

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    setToDoList(prev => [ ...prev, todo ]);
    setTodo('');
  }

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => {
    return (e: ChangeEvent) => setter(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todo} onChange={handleChange(setTodo)}></input>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Form