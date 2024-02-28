import React, { useState } from "react";
import { Link } from "react-router-dom"; // Remove BrowserRouter alias
import Panel from "./Panel";

export default function Links() {
    const [inputVisible, setInputVisible] = useState('');
    const [panelInputs, setPanelInputs] = useState([]);
    const [inputText, setInputText] = useState('');
    const [tempInput, setTempInput] = useState([]);

    const handleLinkClick = (linkName, linkColor) => {
        setInputVisible(linkName);
        setTempInput([...panelInputs, { text: "", color: linkColor }]);
        setInputText(''); 
    };

    const handleInputChange = (e) => {
        setInputText(e.target.value);
        // Update the last item in panelInputs with the new text
        const updatedInputs = [...tempInput];
        if (updatedInputs.length > 0) {
            if(e.target.value.trim() !== "") {
                updatedInputs[updatedInputs.length - 1].text = e.target.value;
            } else {
                updatedInputs.pop();
            }
            setPanelInputs(updatedInputs);
        }
    };

    return (
        <div className='center'>
            <h2>Complete the lyrics</h2>
            <ul className="tab-list">
                <li className='tab-item' style={{ backgroundColor: '#BEADFA' }}>
                    <Link to="/singer/first" onClick={() => handleLinkClick('first', '#BEADFA')}>
                        <span>FIRST SINGER</span>
                    </Link>
                </li>
                <li className='tab-item' style={{ backgroundColor: '#A8DF8E' }}>
                    <Link to="/singer/second" onClick={() => handleLinkClick('second', '#A8DF8E')}>
                        <span>SECOND SINGER</span>
                    </Link>
                </li>
                <li className='tab-item' style={{ backgroundColor: '#7ED7C1' }}>
                    <Link to="/singer/third" onClick={() => handleLinkClick('third', '#7ED7C1')}>
                        <span>THIRD SINGER</span>
                    </Link>
                </li>
                <li className='tab-item' style={{ backgroundColor: '#FF90BC' }}>
                    <Link to="/singer/fourth" onClick={() => handleLinkClick('fourth', '#FF90BC')}>
                        <span>FOURTH SINGER</span>
                    </Link>
                </li>
            </ul>
            <br />
            {inputVisible && <input type="text" value={inputText} onChange={handleInputChange} placeholder={`Enter lyrics for ${inputVisible} singer`} />}
            <Panel inputs={panelInputs} />
        </div>
    );
}
