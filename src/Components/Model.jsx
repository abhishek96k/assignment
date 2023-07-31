import { useState } from "react";
import { createPortal } from "react-dom";
import BlogList from "./BlogList";

const Model = () => {
  const [showModel, setShowModel] = useState(false);

  const toggleModel = () => {
    setShowModel(!showModel);
  };

  if(showModel) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModel} className="btn-model">
        Open
      </button>
      {showModel && (
        <div className="model">
        <div onClick={toggleModel} className="overlay"></div>
        <div className="model-content">
          <h1>1</h1>
          <button className="close-model" onClick={toggleModel}>
            Close
          </button>
        </div>
      </div>
      )}
      
    </>
  );
};

export default Model;
