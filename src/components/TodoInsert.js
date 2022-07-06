import "./TodoInsert.scss";
import { MdAdd } from "react-icons/md";
import { useCallback, useState } from "react";

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState("");

  const onChange = useCallback(
    e => {
      setValue(e.target.value);
    }, []);
    
  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },[onInsert, value]);

  return (
    <div>
      <form className="TodoInsert" onSubmit={onSubmit}>
        <input type="text" required placeholder="Insert here" value={value} onChange={onChange} />
        <button type="submit">
          <MdAdd></MdAdd>
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
