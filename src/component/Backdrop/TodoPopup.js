import { Backdrop, makeStyles, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction, updateTodoAction } from "../../redux/action/todoAction";
import { Calender } from "../DatePicker/Calender";
import { TodoDropdown } from "../Dropdown/TodoDropdown";
import "./TodoPopup.css";

export const TodoPopup = (props) => {
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todoData);

  const [todoVaue, setToDoValue] = useState({
    date:
      props.action === "UPDATE"
        ? todoData.todos[props.index] && todoData.todos[props.index].date
        : new Date(),
    taskName:
      props.action === "UPDATE"
        ? todoData.todos[props.index] && todoData.todos[props.index].taskName
        : "",
    status:
      props.action === "UPDATE"
        ? todoData.todos[props.index] && todoData.todos[props.index].status
        : "active",
  });

  const useStyles = makeStyles({
    p10: {
      "& input": {
        padding: 10,
        fontFamily: "Open Sans",
        fontSize: "14px",
      },
    },
  });

  const muiStyle = useStyles();

  const resetTodoValue = () => {
    setToDoValue({
      date: new Date(),
      taskName: "",
      status: "active",
    });
  };

  const hanndleCancel = (event) => {
    event.preventDefault();
    resetTodoValue();
    props.closeDialog(false);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    dispatch(addTodoAction(todoVaue));
    resetTodoValue();
    props.closeDialog(false);
  };

  const handleUpdateTodo = (event) => {
    event.preventDefault();
    dispatch(updateTodoAction(todoVaue, props.index));
    resetTodoValue();
    props.closeDialog(false);
  };

  useEffect(() => {
    if (props.action === "UPDATE") {
      setToDoValue({
        date: todoData.todos[props.index].date,
        taskName: todoData.todos[props.index].taskName,
        status: todoData.todos[props.index].status,
      });
    }
  }, [props.index]);

  return (
    <Backdrop style={{ zIndex: "10", overflow: "hidden" }} open={props.open}>
      <div className="popupMainContainer">
        <span className="todoTile">{`${
          props.action === "ADD" ? "Create a Todo" : "Edit a Todo"
        }`}</span>
        <div className="mainTodo">
          <div className="todoComponent">
            <span className="todoComponentTitle">Task Name</span>
            <TextField
              classes={{ root: muiStyle.p10 }}
              placeholder={"Enter the task name"}
              variant="outlined"
              value={todoVaue.taskName}
              onChange={(event) => {
                setToDoValue({ ...todoVaue, taskName: event.target.value });
              }}
            />
          </div>
          <div className="todoComponent" style={{ alignItems: "center" }}>
            <span className="todoComponentTitle">Task Date</span>
            <Calender
              selected={todoVaue.date}
              onChange={(date) => {
                setToDoValue({ ...todoVaue, date: date });
              }}
            />
          </div>
          <div className="todoComponent" style={{ alignItems: "center" }}>
            <span className="todoComponentTitle">Task Status</span>
            <TodoDropdown
              data={["active", "inactive"]}
              value={todoVaue.status}
              onSelectItem={(item) => {
                setToDoValue({ ...todoVaue, status: item });
              }}
            />
          </div>
        </div>
        <div className={"buttonContainer"}>
          <button
            className="button confirmButton"
            onClick={(event) => {
              if (todoVaue.taskName.trim().length === 0) {
                alert("Task name can't be empty");
              } else if (props.action === "ADD") {
                handleAddTodo(event);
              } else {
                handleUpdateTodo(event);
              }
            }}
          >
            {`${props.action === "ADD" ? "Add" : "UPDATE"}`}
          </button>
          <button
            className="button cancelButton"
            onClick={(event) => hanndleCancel(event)}
          >
            Cancel
          </button>
        </div>
      </div>
    </Backdrop>
  );
};
