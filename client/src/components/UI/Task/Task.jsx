import React, { useEffect, useState } from "react";
import { TaskWrapper } from "./TaskElements";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ priority, tag, task, index }) => {
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
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <TaskWrapper
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {task.content}
        </TaskWrapper>
      )}
    </Draggable>
  );
};

export default Task;
