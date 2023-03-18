import React, { useEffect, useState } from "react";
import {
  StageWrapper,
  StageTitle,
  Amount,
  AddTaskBtn,
  StageInfo,
  TaskList,
} from "./StageElements";
import Task from "../Task/Task";
import { Droppable } from "react-beautiful-dnd";

const Stage = ({ priority, type, column, tasks }) => {
  // Enable D&D in React 18 Strict Mode
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }
  return (
    <StageWrapper priority={priority}>
      <StageInfo>
        <StageTitle>
          {column.title}
          <Amount color={type}>({0})</Amount>
        </StageTitle>
        <AddTaskBtn color={type}>+</AddTaskBtn>
      </StageInfo>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </StageWrapper>
  );
};

export default Stage;
