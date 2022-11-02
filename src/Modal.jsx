import React from "react";
import "./modal.css";
import "./App.js";

function Modal({ modalData, show, onClose, setShow }) {
  if (!show) {
    return null;
  }
  // console.log(modalData, "this log");

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h1>{modalData.name}</h1>
          <p><b>Pokedex Number: </b>{modalData.pokedexNumber}</p>
          <p><b>Habitat: </b>{modalData.habitat}</p>
          <p><b>Evolves From: </b>{modalData.evolves_from}</p>
          <p><b>Legendary: </b>{modalData.is_legendary ? "True" : "False"}</p>
          <p><b>Mythical: </b>{modalData.is_mythical ? "True" : "False"}</p>
        </div>
        <div className="modal-footer">
          <button className="button" onClick={() => setShow(false)}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;