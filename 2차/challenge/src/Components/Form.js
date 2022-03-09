import React from 'react';
import styled from 'styled-components';

export default function Form({ value, setValue, setTodoData }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoData((prev) => [...prev, newTodo]);
    setValue('');
  };

  return (
    <InputForm onSubmit={handleSubmit}>
      <input
        type="text"
        name="value"
        style={{ flex: '10', padding: '5px' }}
        placeholder="해야 할 일을 입력하세요!"
        value={value}
        onChange={handleChange}
      />
      <input
        type="submit"
        value="추가"
        className="btnSubmit"
        style={{ flex: '1' }}
      />
    </InputForm>
  );
}

const InputForm = styled.form`
  display: flex;
  margin-top: 10px;

  .btnSubmit {
    box-sizing: border-box;
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 10px;
    background-color: #000;
    color: #fff;
    transition: all 0.3s;
    margin-left: 20px;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`;
