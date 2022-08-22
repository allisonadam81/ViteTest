import React from 'react';

export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type FormSubmit = React.FormEvent<HTMLFormElement>;

export type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export type ToDoListType = string[]|[];

export type SetToDoListType = React.Dispatch<React.SetStateAction<string[]|[]>>;