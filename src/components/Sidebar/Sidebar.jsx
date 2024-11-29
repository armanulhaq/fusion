import "./sidebar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
const Sidebar = () => {
    const [isCollapsed, setisCollapsed] = useState(false);
    return (
        <div className="sidebar">
            <div className="top">
                <img
                    onClick={() => setisCollapsed((previous) => !previous)}
                    className="menu"
                    src={assets.menu_icon}
                    alt=""
                />
                <div className="new-chat">
                    <img
                        className="new-chat-icon"
                        src={assets.plus_icon}
                        alt=""
                    />
                    {isCollapsed ? <p>New Chat</p> : null}
                </div>
                {isCollapsed ? (
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        <div className="recent-entry">
                            <p>What is react ...</p>
                        </div>
                    </div>
                ) : null}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {isCollapsed ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {isCollapsed ? <p>Activities</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {isCollapsed ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
