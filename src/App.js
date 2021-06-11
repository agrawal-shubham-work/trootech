import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { TodoPopup } from "./component/Backdrop/TodoPopup";
import { TodoTable } from "./component/Table/TodoTable";

function App() {
  const [addDialogOpen, setAddDialogOpen] = useState(false);

  const todoData = useSelector((state) => state.todoData);

  return (
    <>
      <TodoPopup
        open={addDialogOpen}
        action="ADD"
        closeDialog={setAddDialogOpen}
      />

      <div className="mainContainer">
        <h3 className="title">Todo App</h3>
        {todoData.todos.length === 0 ? (
          <div className={"noData"}>
            <span>No Todo Available</span>
          </div>
        ) : (
          <TodoTable />
        )}
      </div>
      <div className="fabContainer">
        <span className="fabLabel">Add Todo</span>
        <Fab
          color="primary"
          aria-label="add"
          onClick={(event) => {
            event.preventDefault();
            setAddDialogOpen(true);
          }}
        >
          <AddIcon />
        </Fab>
      </div>
    </>
  );
}

export default App;
