const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      title: "task-1",
      content: "Attend a BVT Code Academy meeting",
      date: new Date(),
      tag: "internship",
      priority: "medium",
    },
    "task-2": {
      id: "task-2",
      title: "task-2",
      content: "Part time job at Trader Joe’s",
      date: new Date(),
      tag: "Part time",
      priorty: "high",
    },
    "task-3": {
      id: "task-3",
      title: "task-3",
      content: "Preparing project intro for Module 2 Final Project",
      date: new Date(),
      tag: "assignment",
      priorty: "high",
    },
    "task-4": {
      id: "task-4",
      title: "task-4",
      content: "Discussing user flows and wire frames for Hackathon",
      date: new Date(),
      tag: "low",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      type: "todo",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      type: "inprogress",
      title: "In Progress",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      type: "done",
      title: "Done",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
