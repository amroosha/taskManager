import React from "react";
import "../css/task.css";

function CustomTask({task}) {
  const color = ["blue", "yellow", "red"];
  return (
    <div className="task" style={{ backgroundColor: color[task.priority] }}>
      <h3 className="task-title">{task.title}</h3>
      <p className="task-description">{task.description}</p>
    </div>
  );
}

export default CustomTask;