import "./TodoInsert.scss";
import { MdAdd } from "react-icons/md";
import { useCallback, useState } from "react";

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState("");

  const onChange = useCallback(
    e => {
      setValue(e.target.value);
    }, []);
    //useCallback 을 통해서 TodoInsert 함수 컴포넌트가 불려질 때마다 onChange 함수를 계속해서 새로 생성하는 것(메모리를 계속해서 새로 만들어서 성능을 안좋게 만든다.)이 아니라 첫 렌더링 때만 함수를 만들고, 재사용한다. 

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },[onInsert, value]);

  return (
    <div>
      <form className="TodoInsert" onSubmit={onSubmit}>
        <input type="text" placeholder="Insert here" value={value} onChange={onChange} />
        <button type="submit">
          <MdAdd></MdAdd>
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
