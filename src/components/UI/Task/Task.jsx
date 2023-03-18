import React from "react";
import { TaskWrapper } from "./TaskElements";

const Task = ({ title, date, priority, tag }) => {
  return (
    <TaskWrapper>
      <h1>{title}</h1>
      <p>{date}</p>
      {priority}
      {tag}
    </TaskWrapper>
  );
};

export default Task;
