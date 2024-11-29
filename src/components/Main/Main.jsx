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
            <div className="cards">
                <div className="card">
                    <p>
                        Brainstorm team bonding activities for our work retreat
                    </p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest beautiful places to visit in India.</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarize this concept: urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>

                <div className="card">
                    <p>Tell me about React js and React native</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Main;
