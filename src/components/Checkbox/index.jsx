import React from 'react';
import "./index.css";

function Checkbox(props) {
  const {termsAccepted, setTermsAccepted} = props;     
  
  const getCheckboxClasses = () => 
    `terms-checkbox ${termsAccepted 
      ? "terms-checkbox_checked"
      : "terms-checkbox_unchecked"}`;

  const handleKeyDown = (e) => { // Must be key down, not key up (otherwise page scrolls down)
    if (e.keyCode === 32 || e.keyCode === 13) { // "Space" or "Enter"
      setTermsAccepted(prevState => !prevState);
    }
  }
  
  return (
    <div className={getCheckboxClasses()}
      onClick={() => setTermsAccepted(prevState => !prevState)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >

    </div>
  );
}

export default Checkbox;