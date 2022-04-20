import React,{useEffect, useRef} from 'react';
import ReactDom from 'react-dom';
import close from "../../assets/close.svg"


const Modal = ({ moreTxt, isOpen, onClose, myArray }) => {


  if (!isOpen) return null;


  return ReactDom.createPortal(
    <div className="modal" id="modal">
      <div className="closeContainer">
        <div>
          <img src={close} onClick={onClose} />
        </div>
      </div>
{
      myArray.map((ma, index) => (

        <div key={index}><img src={ma} /></div>

      ))
}

      <div className="moretext">{moreTxt}</div>
    </div>,
    document.body

  );
};

export default Modal;
