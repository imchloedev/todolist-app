## Todo List 


#### 2022/07/02   
**Issues**
1. TodoTemplate 컴포넌트를 생성하고 App.js에 import 해준 후 렌더링 성공
2. TodoInsert 컴포넌트 생성  후 App 에 import 후 TodoTemplate 컴포넌트사이에 작성 후 렌더링 --> TodoInsert 컴포넌트가 렌더링 실패
 - console에 확인 결과 error 문제라고 뜨지 않음.

**Solution**
1. 컴포넌트 태그 사이의 내용을 보여주는 props을 사용하지 않아서 생기는 오류로 확인.
2. TodoTemplate 컴포넌트에 props로 { children }을 전달해 줌 

---

#### 2022/07/03
**Issues**z
1. 잦은 렌더링 문제

**Solution**
1. props가 바뀌지 않으면 리렌더링이 진행되지 않게 React.memo를 사용한다. 
2. Todolistitem 에 리액트 메모 사용 —> prop인 todo, onRemove, onToggle 바뀌지 않으면 렌더링 되지 않는다.

---

#### 2022/07/05
**Issues**
1. key 값 즉 id 값을 useReducer로 사용하면서 오류 발생 
- nextid 이후 5이후의 값들이 지우기 버튼을 누르면 한번에 사라짐 — 즉 id 가 +1이 되지 않아서 고유한 id 값을 4 이후로 5로 동일하게 가짐 (리액트 개발자 도구)

**Solution**
1. onInsert 함수에 nextid += 1을 해줬더니 오류 해결


