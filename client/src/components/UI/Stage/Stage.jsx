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

const Stage = () => {
  // Enable D&D in React 18 Strict Mode
  const [enabled, setEnabled] = useState(false);
  // useEffect(() => {
  //   const animation = requestAnimationFrame(() => setEnabled(true));

  //   return () => {
  //     cancelAnimationFrame(animation);
  //     setEnabled(false);
  //   };
  // }, []);

  if (!enabled) {
    return null;
  }
  return (
    <StageWrapper priority={priority}>
      <StageInfo>
        <StageTitle onClick={updateTask}>
          {column.title}
          <Amount color={type}>amount</Amount>
        </StageTitle>
        <AddTaskBtn onClick={getTask} color={type}>
          +
        </AddTaskBtn>
      </StageInfo>
    </StageWrapper>
  );
};

export default Stage;
