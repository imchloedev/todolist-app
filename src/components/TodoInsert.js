import "./TodoInsert.scss";
import { MdAdd } from "react-icons/md";

const TodoInsert = () => {
  return (
    <div>
      <form className="TodoInsert">
        <input type="text" placeholder="할 일을 입력하세요" />
        <button type="submit">
          <MdAdd></MdAdd>
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
