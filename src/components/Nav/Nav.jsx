import { assets } from "../../assets/assets";
import "./nav.css";
const Nav = () => {
    return (
        <div className="nav">
            <p>Fusion AI</p>
            <img src={assets.user_icon} alt="" />
        </div>
    );
};

export default Nav;
