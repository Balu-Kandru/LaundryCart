import React from "react";
import "./modal.css";
import warningIcon from "../assests/warning.svg"
function Modal({ setOpenModal }) {
    return (
        <div className="modalBackground">
          <div className="modalContainer">
            
            <div className="titleCloseBtn">
            <h3>Alert</h3>
              <button
                onClick={() => {
                  setOpenModal(false);
                }}> X </button>
            </div>
            
            <div className="title">
              <img src={warningIcon}  alt="err"></img>   
              <h1>Are you sure want to cancel the oreder No: OR00001</h1>
           
              
              <br></br><button>Proceed</button>
              </div>
          </div>
        </div>
      );
    }
    
    export default Modal;