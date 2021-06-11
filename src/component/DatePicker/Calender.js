import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Calender = (props) => {
  return (
    <DatePicker
      selected={props.selected}
      onChange={props.onChange}
      dateFormat={"dd/MM/yyyy"}
    />
  );
};
