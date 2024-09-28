import React , {useRef} from 'react'
function FocusInput() {
  // Create a ref using useRef
  const inputRef = useRef(null);

  // Function to focus the input field
  const focusInput = () => {
    // Access the current property of the ref to focus the input
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default FocusInput;