import React, { useRef } from "react";

const UseRefHook = () => {

  // Creating a ref object using useRef hook
  const focusPoint = useRef(null);
  const onClickHandler = () => {
    focusPoint.current.value = "An apple a day keeps the doctor away !!";
    focusPoint.current.focus();
  };

  return (
    <>
      <div>
        <button onClick={onClickHandler}>ACTION</button>
      </div>
      <label>Click on the action button to focus and populate the text.</label><br/>
      <textarea ref={focusPoint} placeholder="type here..."/>
    </>
  );
};

export default UseRefHook;
