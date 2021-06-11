import { Backdrop } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodoAction } from "../../redux/action/todoAction";

export const DeletePopup = (props) => {
  const dispatch = useDispatch();

  const hanndleCancel = (event) => {
    event.preventDefault();
    props.closeDialog(false);
  };

  return (
    <Backdrop style={{ zIndex: "10", overflow: "hidden" }} open={props.open}>
      <div className="popupMainContainer">
        <span className="todoTile">Delete Todo</span>

        <span style={{ marginLeft: "10px" }}>
          Are you sure you want to delete{" "}
          <span className={"todoConfirmText"}> {props.taskName}</span>
        </span>

        <div className={"buttonContainer"}>
          <button
            className="button deleteBTN"
            onClick={(event) => {
              dispatch(deleteTodoAction(props.index));
              props.closeDialog(false);
            }}
          >
            {`Delete`}
          </button>
          <button
            className="button deleteCancel"
            onClick={(event) => hanndleCancel(event)}
          >
            Cancel
          </button>
        </div>
      </div>
    </Backdrop>
  );
};
