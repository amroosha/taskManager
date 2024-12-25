import React, { useEffect, useRef, useState } from "react";
import { DataSet, Timeline } from "vis-timeline/standalone";
import { createRoot } from "react-dom/client";
import CustomTask from "./task";
import "vis-timeline/dist/vis-timeline-graph2d.min.css";
import "../css/dateTimeline.css";

const DateTimeLine = ({ tasks }) => {
  const [timeline, setTimeline] = useState(null);  
  const timelineRef = useRef(null);
  const groups = new DataSet();
  const items = new DataSet();

  useEffect(() => {
    const start = tasks.reduce(
      (oldest, task) => (task.createdAt < oldest ? task.createdAt : oldest),
      tasks[0].createdAt
    );
    const end = tasks.reduce(
      (newest, task) => (task.dueDate > newest ? task.dueDate : newest),
      tasks[0].dueDate
    );


    const options = {
      stack: true,
      height: "100%",
      horizontalScroll: false,
      verticalScroll: false,
      zoomKey: "altKey",
      start: start,
      end: end,
      orientation: {
        axis: "top",
        item: "top",
      },
      showCurrentTime: true,
    };


    const createItemContent = (task) => {
      const container = document.createElement("div");
      container.setAttribute("id", "task");
      const root = createRoot(container);
      root.render(<CustomTask task={task} />);
      return { container, root };
    };

    const uniqueGroupIds = [...new Set(tasks.map((task) => task.id))];

    uniqueGroupIds.forEach((groupId) => {
      groups.add({ id: groupId, content: `Group ${groupId}` });
    });

    const itemContents = tasks.map((task) => createItemContent(task));

    tasks.forEach((task, index) => {
      items.add({
        id: task.id,
        content: itemContents[index].container,
        start: task.createdAt,
        end: task.dueDate,
        group: task.id, 
      });
    });

    const container = timelineRef.current;
    const visTimeline = new Timeline(container, items, groups, options);

    setTimeline(visTimeline);

    return () => {
      visTimeline.destroy();
      itemContents.forEach(({ root }) => {
        root.unmount();
      });
    };
  }, [tasks]);

  return (
    <div
      ref={timelineRef}
      style={{
        height: "100%",
        backgroundColor: "#0B1932",
      }}
    ></div>
  );
};

export default DateTimeLine;