import React from 'react';
import "./index.css";

function Checkbox(props) {
  // const {termsAccepted, setTermsAccepted, tabIndex} = props;     
  const {termsAccepted, setTermsAccepted} = props;     
  
  const getCheckboxClasses = () => 
    `terms-checkbox ${termsAccepted 
      ? "terms-checkbox_checked"
      : "terms-checkbox_unchecked"}`;

  const handleKeyUp = (e) => {
    if (e.code === "Space") {
      setTermsAccepted(prevState => !prevState);
    }
  }
  
  return (
    <div className={getCheckboxClasses()}
      onClick={() => setTermsAccepted(prevState => !prevState)}
      onKeyUp={handleKeyUp}
      // tabIndex={tabIndex}
    >

    </div>
  );
}

export default Checkbox;