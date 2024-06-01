import { useEffect, useState } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [show, setshow] = useState(false);
  const navigate = useNavigate();

  const scrollNavbar = () => {
    if (window.scrollY >= 100) {
      setshow(true);
    } else {
      setshow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollNavbar);
    return () => window.removeEventListener("scroll", scrollNavbar);
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contant">
        <img
          onClick={() => navigate("/")}
          className="nav_logo"
          src="public\580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default NavBar;
