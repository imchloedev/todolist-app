##Todo List 


Problem
1. TodoTemplate 컴포넌트를 생성하고 App.js에 import 해준 후 렌더링 성공
2. TodoInsert 컴포넌트 생성  후 App 에 import 후 TodoTemplate 컴포넌트사이에 작성 후 렌더링 --> TodoInsert 컴포넌트가 렌더링 실패
 - console에 확인 결과 error 문제라고 뜨지 않음.
 
Solving
1. 컴포넌트 태그 사이의 내용을 보여주는 props을 사용하지 않아서 생기는 오류로 확인.
2. TodoTemplate 컴포넌트에 props로 { children }을 전달해 줌 





