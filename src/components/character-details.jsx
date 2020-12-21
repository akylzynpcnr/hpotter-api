import React, { useState, useEffect, useRef } from "react";
import "../style.css";

export default props => {
  const [open, setOpen] = useState();
  const [template, setTemplate] = useState();

  const handleClose = () => {
    setOpen(false);
    props.handleClose();
  };

  const createTemplate = () => {
    return (
      <table className="table table-striped">
        <tr>
          <th scope="row">Name</th>
          <td>{props.character.name}</td>
        </tr>
        <tr>
          <th scope="row">Actor</th>
          <td>{props.character.actor}</td>
        </tr>
        <tr>
          <th scope="row">Ancenstry</th>
          <td>{props.character.ancestry}</td>
        </tr>
        <tr>
          <th scope="row">Birthday</th>
          <td>{props.character.dateOfBirth}</td>
        </tr>
        <tr>
          <th scope="row">Gender</th>
          <td>{props.character.gender}</td>
        </tr>
        <tr>
          <th scope="row">House</th>
          <td>{props.character.house}</td>
        </tr>
        <tr>
          <th scope="row">Species</th>
          <td>{props.character.species}</td>
        </tr>
      </table>
    );
  };

  useEffect(() => {
    setOpen(props.isOpen);
    if (typeof props.character != "undefined") {
      setTemplate(createTemplate());
    }
  }, [props.isOpen]);

  return (
    <div className={open ? "modal-overlay is-open" : "modal-overlay"}>
      <div className="modal-body">
        <button
          onClick={handleClose}
          type="button"
          className="btn btn btn-info modal-close"
        >
          Kapat
        </button>
        {open ? template : ""}
      </div>
    </div>
  );
};
