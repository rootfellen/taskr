import React, { useState, useContext, useRef, useEffect } from "react";
import Hero from "../../UI/Hero/Hero";
import Stage from "../../UI/Stage/Stage";
import { StagesWrapper, AddStageButton } from "./BoardElements";
import Task from "../../UI/Task/Task";
import { DragDropContext } from "react-beautiful-dnd";

const Board = () => {
  const [userTasks, setUserTasks] = useState({
    columnOrder: [],
    columns: {},
    tasks: {},
  });

  //  READ TASKS

  const handleGetTask = async () => {};

  // UPDATE TASKS

  // DRANG & DROP
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <Hero>
        <StagesWrapper>
          <Stage />
          <AddStageButton>+</AddStageButton>
        </StagesWrapper>
      </Hero>
    </>
  );
};

export default Board;
