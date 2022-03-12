import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const List = React.memo(
  ({ id, title, completed, todoData, setTodoData, provided, snapshot }) => {
    const [modify, setModify] = useState(false);
    const [newData, setNewData] = useState('');

    const handleCompleteChange = (id) => {
      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.completed = !data.completed;
        }
        return data;
      });

      setTodoData(newTodoData);
    };

    const deleteList = useCallback(
      (id) => {
        let newTodoData = todoData.filter((data) => data.id !== id);
        setTodoData(newTodoData);
      },
      [todoData]
    );

    const modifyList = () => {
      setModify(true);
    };

    const completModify = (id) => {
      setModify(false);
      const newTodoData = [...todoData];
      newTodoData.find((data) => data.id === id).title = newData;
      setTodoData(newTodoData);
    };

    return (
      <TodoItem
        isDrag={snapshot.isDragging}
        isCompleted={completed}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
      >
        {modify ? (
          <input
            type="text"
            className="inp-modify"
            onChange={(e) => setNewData(e.target.value)}
          />
        ) : (
          <label>
            <input
              type="checkbox"
              defaultChecked={completed}
              id={id}
              onChange={() => handleCompleteChange(id)}
            />
            {title}
          </label>
        )}

        <BtnWrap>
          {modify ? (
            <button type="button" onClick={() => completModify(id)}>
              완료
            </button>
          ) : (
            <button type="button" onClick={() => modifyList()}>
              수정
            </button>
          )}
          <button type="button" onClick={() => deleteList(id)}>
            삭제
          </button>
        </BtnWrap>
      </TodoItem>
    );
  }
);

const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
  background-color: ${(props) =>
    props.isDrag ? 'rgba(0, 0, 0, .7)' : 'inherit'};

  .inp-modify {
    width: 400px;
    border: none;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const BtnWrap = styled.div`
  button {
    cursor: pointer;
    border: none;
    border-radius: 10px;
    padding: 5px 9px;
    color: #fff;
    background-color: #000;
  }

  button + button {
    margin-left: 5px;
  }
`;

export default List;
