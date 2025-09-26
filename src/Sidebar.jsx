import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1500);
  const [open, setOpen] = useState(!isMobile);

  
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1500;
      setIsMobile(mobile);
      setOpen(!mobile); 
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Hamburger icon for mobile */}
      {isMobile && (
        <div className="hamburger" onClick={() => setOpen(!open)}>
          &#9776;
        </div>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${open ? "open" : "closed"}`}>
        <h1 className="logo">Portfolio</h1>
        <div onClick={() => navigate("/")}>
          <i className="bi bi-house-door"></i> Home
        </div>
        <div onClick={() => navigate("/profile")}>
          <i className="bi bi-person-circle"></i> Profile
        </div>
        <div onClick={() => navigate("/skills")}>
          <i className="bi bi-code-slash"></i> Skills
        </div>
        <div onClick={() => navigate("/education")}>
          <i className="bi bi-book"></i> Education
        </div>
        <div onClick={() => navigate("/clubs")}>
          <i className="bi bi-people"></i> Clubs
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isMobile && open && <div className="overlay" onClick={() => setOpen(false)}></div>}
    </>
  );
}

export default Sidebar;
