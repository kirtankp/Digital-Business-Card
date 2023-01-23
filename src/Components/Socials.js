import iconFB from "../images/Facebook.png";
import iconGit from "../images/GitHub.png";
import iconIG from "../images/Instagram.png";
import iconT from "../images/Twitter.png";

export default function Socials() {
    return(
        <div className="socialLink-container">
            <img src={iconT} alt="no"/>
            <img src={iconFB} alt="no"/>
            <img src={iconIG} alt="no"/>
            <img src={iconGit} alt="no"/>
        </div>
    )
}