import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./components/button";
import Header from "./components/header";
import ListItem from "./components/listItem";
import { tasks } from "./components/mocked-tasks";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Button text="new item"/>
    <div className="list-container">
      {tasks.map((task, i) => (
        <ListItem text={task} key={i} />
      ))}
    </div>
  </React.StrictMode>
);
