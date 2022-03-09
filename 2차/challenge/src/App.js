import React, { useState } from 'react';
import styled from 'styled-components';

import TodoList from './Components/TodoList';
import Form from './Components/Form';

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState('');

  const removeTodoData = () => {
    setTodoData([]);
  };

  return (
    <Container>
      <TodoBlock>
        <Title>
          <h1>To-do-List</h1>
          <button className="btn-reset" onClick={removeTodoData}>
            모두 지우기
          </button>
        </Title>
        <TodoList todoData={todoData} setTodoData={setTodoData} />
        <Form value={value} setValue={setValue} setTodoData={setTodoData} />
      </TodoBlock>
    </Container>
  );
}

const Container = styled.div`
  margin: auto;
  max-width: 600px;
`;

const TodoBlock = styled.div`
  padding: 30px;
  margin-top: 50px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: -9px 17px 13px rgb(0 0 0 /16%);
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .btn-reset {
    box-sizing: border-box;
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid #000;
    border-radius: 10px;
    background-color: #000;
    color: #fff;
    transition: all 0.3s;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`;
