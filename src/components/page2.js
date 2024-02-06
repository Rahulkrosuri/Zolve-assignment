import React, {useState, useEffect} from "react";

const CopyToClipBoard = () => {
    const [inputValue, setInputValue] = useState('');
    const [copy, setCopy] = useState('Copy')

    useEffect (()=> {
        if (inputValue.length === 0) {
            setCopy('Copy')
        }
    }, [inputValue])
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value)
    };

    const checForValidUrl = (str) => {
        const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*\??[^#\s]*$/;
        return urlRegex.test(str)
    }

    const handleCopyInput = () => {
      let textToCopy = inputValue.trim();
      let isUrl = checForValidUrl(inputValue)
      if (isUrl){
        const url = inputValue
        let qParam = url.split('?q=')[1]
        textToCopy = qParam
      }
      if (!textToCopy) return; // Do nothing if input value is empty

      // Create a temporary textarea element to copy text to clipboard
      const tempTextArea = document.createElement('textarea');
      tempTextArea.value = textToCopy;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();

      // Execute the copy command
      document.execCommand('copy');

      // Clean up
      document.body.removeChild(tempTextArea);

      // Update state to indicate copied
      setCopy('Copied');
    }
  
    return (
        <div>
        <h2>Page 2: Copy to Clipboard</h2>
        <div>
          <h3>Copy Input Textbox Value to Clipboard</h3>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => handleInputChange(e)}
          />
          <button onClick={handleCopyInput}>{copy}</button>
        </div>
      </div>
    )
}

export default CopyToClipBoard
