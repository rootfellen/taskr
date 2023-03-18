import React from "react";
import {
  StageWrapper,
  StageTitle,
  Amount,
  AddTaskBtn,
  StageInfo,
} from "./StageElements";

const Stage = ({ priority, children, type, amount }) => {
  return (
    <StageWrapper priority={priority}>
      <StageInfo>
        <StageTitle>
          {type === "todo"
            ? "To do"
            : type === "inprogress"
            ? "In Progress"
            : "Completed"}
          <Amount color={type}>({amount})</Amount>
        </StageTitle>
        <AddTaskBtn color={type}>+</AddTaskBtn>
      </StageInfo>
      {children}
    </StageWrapper>
  );
};

export default Stage;
