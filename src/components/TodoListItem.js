import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';


const TodoListItem = ({todo, onRemove, onToggle}) => {
  const {id, text, checked} = todo;

  //const id = todo.id
  //const text = todo.text
  //const checked = todo.checked --> destructing 

  return (
    <div className='TodoListItem'>
      <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/> }
        <div className='text'>
          {text}
          </div>
      </div>
      <div className='remove' onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline></MdRemoveCircleOutline>
      </div>
    </div>
  );
};


export default React.memo(TodoListItem);


