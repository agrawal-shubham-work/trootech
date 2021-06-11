import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { useSelector } from "react-redux";
import { DeletePopup } from "../Backdrop/DeletePopup";
import { TodoPopup } from "../Backdrop/TodoPopup";
import "./TodoTable.css";

export const TodoTable = (props) => {
  const todoData = useSelector((state) => state.todoData);
  const [index, setIndex] = useState(0);
  const [taskName, setTaskName] = useState("");
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(todoData.todos);
  }, [todoData.todos]);

  const columns = [
    {
      dataField: "taskName",
      text: "Task Name",
      headerStyle: {
        verticalAlign: "middle",
        textAlign: "left",
      },
      style: {
        verticalAlign: "middle",
        textAlign: "left",
      },
    },
    {
      dataField: "status",
      text: "Task Status",
      headerStyle: {
        verticalAlign: "middle",
        textAlign: "left",
      },
      style: {
        verticalAlign: "middle",
        textAlign: "left",
      },
    },
    {
      dataField: "date",
      text: "Task Date",

      headerStyle: {
        verticalAlign: "middle",
        textAlign: "left",
      },
      style: {
        verticalAlign: "middle",
        textAlign: "left",
      },
      formatter: (cell, row, rowIndex) => (
        <span>{moment(cell).format("DD/MM/YYYY")}</span>
      ),
    },
    {
      dataField: "",
      text: "Action",
      headerStyle: {
        verticalAlign: "middle",
        textAlign: "left",
      },
      style: {
        verticalAlign: "middle",
        textAlign: "left",
      },
      formatter: (cell, row, rowIndex) => (
        <div className="actionContainer">
          <EditIcon
            className={"customIcon"}
            onClick={() => {
              setIndex(rowIndex);
              setUpdateDialogOpen(true);
            }}
          />
          <DeleteIcon
            className={"customIcon"}
            onClick={() => {
              setIndex(rowIndex);
              setTaskName(row.taskName);
              setDeleteDialogOpen(true);
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <TodoPopup
        open={updateDialogOpen}
        action="UPDATE"
        index={index}
        closeDialog={setUpdateDialogOpen}
      />
      <DeletePopup
        open={deleteDialogOpen}
        taskName={taskName}
        closeDialog={setDeleteDialogOpen}
      />
      <div className="todoTable">
        <BootstrapTable
          bootstrap4
          keyField="id"
          bordered={false}
          data={tableData}
          columns={columns}
        />
      </div>
    </>
  );
};
