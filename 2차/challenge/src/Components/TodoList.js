import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

export default function TodoList({ todoData, setTodoData }) {
  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });

    setTodoData(newTodoData);
  };

  const deleteList = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  const handleEnd = (result) => {
    if (!result.destination) return;
    const newTodoData = todoData;
    const [reoderedItem] = newTodoData.splice(result.source.index, 1);
    newTodoData.splice(result.destination.index, 0, reoderedItem);
    setTodoData(newTodoData);
  };

  return (
    <DragDropContext onDragEnd={handleEnd}>
      <Droppable droppableId="todo">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {todoData.map((data, index) => (
              <Draggable
                key={data.id}
                draggableId={data.id.toString()}
                index={index}
              >
                {(provided, snapshot) => (
                  <TodoItem
                    isDrag={snapshot.isDragging}
                    isCompleted={data.completed}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                  >
                    <input
                      type="checkbox"
                      defaultChecked={data.completed}
                      id={data.id}
                      onChange={() => handleCompleteChange(data.id)}
                    />
                    <label htmlFor={data.id}>{data.title}</label>
                    <DeleteBtn onClick={() => deleteList(data.id)}>X</DeleteBtn>
                  </TodoItem>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

const TodoItem = styled.div`
  padding: 10px;
  border-bottom: 1px #ccc dotted;
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
  background-color: ${(props) =>
    props.isDrag ? 'rgba(0, 0, 0, .7)' : 'inherit'};
`;

const DeleteBtn = styled.button`
  cursor: pointer;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  float: right;
`;
