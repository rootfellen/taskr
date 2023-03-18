import React, { useState } from "react";
import Hero from "../../UI/Hero/Hero";
import Stage from "../../UI/Stage/Stage";
import { StagesWrapper, AddStageButton } from "./BoardElements";
import Task from "../../UI/Task/Task";
const Board = () => {
  const [amount, setAmount] = useState({
    todo: 0,
    inprogress: 0,
    completed: 0,
  });
  return (
    <>
      <Hero>
        <StagesWrapper>
          <Stage type="todo" amount={amount.todo}>
            <Task
              title="Attend a BVT Code Academy meeting"
              date="19 March 2023"
              tag="internship"
              priority="medium"
            />
          </Stage>
          <Stage type="inprogress" amount={amount.inprogress}>
            Task number 1
          </Stage>
          <Stage type="completed" amount={amount.completed}>
            Task number 1
          </Stage>
          <AddStageButton>+</AddStageButton>
        </StagesWrapper>
      </Hero>
    </>
  );
};

export default Board;
