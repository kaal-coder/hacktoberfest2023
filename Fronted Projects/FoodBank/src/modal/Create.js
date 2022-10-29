import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import DatePicker from "react-datepicker";
// import TimePicker from 'react-time-picker';

import "react-datepicker/dist/react-datepicker.css";

const CreateTaskPopup = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [taskvenue, setTaskvenue] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [Time, setTime] = useState("10:00");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    }
    if (name === "Time") {
      setTime(value);
    } else if (name === "taskvenue") {
      setTaskvenue(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    taskObj["venue"] = taskvenue;
    taskObj["Date"] = startDate;
    taskObj["Time"] = Time;

    fetch("http://localhost:5001/api/submit", {
      method: "POST",
      body: JSON.stringify({
        Name: taskName,
        Description: description,
        venue: taskvenue,
        Date: startDate,
        Time: Time,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={taskName}
            onChange={handleChange}
            name="taskName"
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <DatePicker
            name="Date"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="form-group">
          <label>food brief</label>
          <input
            type="text"
            className="form-control"
            value={Time}
            onChange={handleChange}
            name="Time"
          />
        </div>
        <div className="form-group">
          <label>quantity</label>
          <input
            type="text"
            className="form-control"
            value={taskvenue}
            onChange={handleChange}
            name="taskvenue"
          />
        </div>

        <div className="form-group">
          <label>contact</label>
          <textarea
            rows="5"
            className="form-control"
            value={description}
            onChange={handleChange}
            name="description"
          ></textarea>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTaskPopup;
