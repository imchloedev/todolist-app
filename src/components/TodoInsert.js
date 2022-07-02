import "./TodoInsert.scss";
import { MdAdd } from "react-icons/md";

const TodoInsert = () => {
  return (
    <div>
      <form className="TodoInsert">
        <input type="text" placeholder="Insert here" />
        <button type="submit">
          <MdAdd></MdAdd>
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
