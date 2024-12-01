import "./sidebar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
const Sidebar = ({ queries }) => {
    const [isCollapsed, setisCollapsed] = useState(false);
    return (
        <div className="sidebar">
            <div className="top">
                <img
                    onClick={() => setisCollapsed((prev) => !prev)}
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
                    {isCollapsed && <p>New Chat</p>}
                </div>
                {isCollapsed && (
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {queries.map((query, index) => (
                            <div key={index} className="recent-entry">
                                <p>
                                    {query.length > 25
                                        ? `${query.substring(0, 25)}...`
                                        : query}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="bottom">
                <div className="bottom-item">
                    <a
                        href="https://github.com/armanulhaq"
                        target="_blank"
                        rel="noopener"
                    >
                        <img src={assets.github} alt="" />
                    </a>
                    <a
                        href="https://github.com/armanulhaq"
                        target="_blank"
                        rel="noopener"
                    >
                        {isCollapsed ? <p>Github</p> : null}
                    </a>
                </div>

                <div className="bottom-item">
                    <a
                        href="https://www.linkedin.com/in/armanulhaq/"
                        target="_blank"
                        rel="noopener"
                    >
                        <img src={assets.linkedin} alt="" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/armanulhaq/"
                        target="_blank"
                        rel="noopener"
                    >
                        {isCollapsed ? <p>Linkedin</p> : null}
                    </a>
                </div>

                <div className="bottom-item">
                    <a
                        href="https://iamarman.vercel.app/"
                        target="_blank"
                        rel="noopener"
                    >
                        <img src={assets.portfolio} alt="" />
                    </a>
                    <a
                        href="https://iamarman.vercel.app/"
                        target="_blank"
                        rel="noopener"
                    >
                        {isCollapsed ? <p>Portfolio</p> : null}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
