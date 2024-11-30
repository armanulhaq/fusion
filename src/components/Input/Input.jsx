import { useEffect, useRef } from "react";
import { assets } from "../../assets/assets";
import "./input.css";

const Input = ({ query, setQuery, onSubmit }) => {
    const textareaRef = useRef(null);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        if (textareaRef.current) {
            // This clears any previously set height and Prevents the height from "sticking" to a larger size when text is deleted.
            textareaRef.current.style.height = "auto";
            // Dynamically adjusts the height to match the current content and Ensures the <textarea> grows as new text is added.
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [query]);
    return (
        <div className="input-container">
            <div className="search-box">
                <input
                    ref={textareaRef}
                    placeholder="Ask Fusion AI"
                    value={query}
                    onChange={handleInputChange}
                    type="text"
                />
                <div className="send-button-container">
                    <img src={assets.send_icon} onClick={onSubmit} alt="" />
                </div>
            </div>
            <p className="bottom-info">
                Fusion AI may display inaccurate info, including about people,
                so double-check its responses.
            </p>
        </div>
    );
};

export default Input;
