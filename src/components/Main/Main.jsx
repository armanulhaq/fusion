import { assets } from "../../assets/assets";
import "./main.css";

const Main = () => {
    return (
        <div className="main">
            <div className="nav">
                <p>Fusion AI</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p>
                        <span>Hello, there</span>
                    </p>
                    <p>How can I help you today?</p>
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder="Enter a prompt here" />
                    <div>
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Fusion AI may display inaccurate info, including about
                    people, so double-check its responses.
                </p>
            </div>
        </div>
    );
};

export default Main;
