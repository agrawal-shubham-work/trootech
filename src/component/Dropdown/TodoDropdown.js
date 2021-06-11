import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Dropdown.css";

export const TodoDropdown = (props) => {
  return (
    <Dropdown
      controlClassName={`mainDropDown`}
      menuClassName={"dropDownOption"}
      options={props.data}
      onChange={(event) => {
        props.onSelectItem(event.value);
      }}
      value={props.value}
      arrowClosed={<ExpandMoreIcon style={{ color: "#0096D6" }} />}
      arrowOpen={<ExpandMoreIcon style={{ color: "#0096D6" }} />}
    />
  );
};
