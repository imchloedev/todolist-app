import './TodoTemplate.scss';


const TodoTemplate = ({children}) => {

  return (
    <div className="TodoTemplate">
      <div className="TodoTitle">To-do List</div>
      <div className="content">{children}</div>
    </div>
  );

};


export default TodoTemplate;