import React from "react";
import "./modal.css";
import warningIcon from "../assests/warning.svg"
function Modal({ setOpenModal,cancelid,cancelOrderfunc,id }) {
  const cancelorder=(cancelid)=>{
      cancelOrderfunc(cancelid)
      setOpenModal(false)
  }
    return (
      <>

        <div id="for-black"></div>
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
              <h1>Are you sure want to cancel the order No:{id}</h1>
              <br></br><button  onClick={() => {cancelorder(cancelid);}}>Proceed</button>
            </div>
          </div>
          </>
      );
    }
    
    export default Modal;