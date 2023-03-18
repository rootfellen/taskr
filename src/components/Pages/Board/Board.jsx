import React, { useState } from "react";
import Hero from "../../UI/Hero/Hero";
import Stage from "../../UI/Stage/Stage";
import { StagesWrapper, AddStageButton } from "./BoardElements";
import Task from "../../UI/Task/Task";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "../../../utils/tasks";
const Board = () => {
  const [tasks, setTasks] = useState(initialData);
  const [amount, setAmount] = useState({
    todo: 0,
    inprogress: 0,
    completed: 0,
  });

  const result = {
    draggableId: "task-1",
    type: "TYPE",
    reason: "DROP",
    source: {
      droppableId: "column-1",
      index: 0,
    },
    destination: null,
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    // if no destination do nothing
    if (!destination) {
      return;
    }
    // if matched, do nothing

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const column = tasks.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);
    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };
    const newState = {
      ...tasks,
      columns: {
        ...tasks.columns,
        [newColumn.id]: newColumn,
      },
    };
    setTasks(newState);
  };
  return (
    <>
      <Hero>
        <StagesWrapper>
          <DragDropContext onDragEnd={onDragEnd}>
            {tasks.columnOrder.map((columnId) => {
              const column = tasks.columns[columnId];
              const items = column.taskIds.map((taskId) => tasks.tasks[taskId]);
              return <Stage key={column.id} column={column} tasks={items} />;
            })}
          </DragDropContext>

          <AddStageButton>+</AddStageButton>
        </StagesWrapper>
      </Hero>
    </>
  );
};

export default Board;
