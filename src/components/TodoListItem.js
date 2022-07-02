import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';


const TodoListItem = ({todo}) => {
  const {text, checked} = todo;

  //const text = todo.text
  //const checked = todo.checked --> 객체 분할 구조

  return (
    <div className='TodoListItem'>
      <div className={cn('checkbox', {checked})}>
        {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/> }
        <div className='text'>{text}</div>
      </div>
      <div className='remove'>
        <MdRemoveCircleOutline></MdRemoveCircleOutline>
      </div>
    </div>
  );
};


export default TodoListItem;


