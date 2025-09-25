import React, { useState, useEffect } from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaFacebookF,
  FaTelegram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaFacebookMessenger,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Animated text effect
  useEffect(() => {
    const text = document.querySelector(".snd-text");
    if (!text) return;

    const textLoad = () => {
      setTimeout(() => (text.textContent = "Programmer"), 0);
      setTimeout(() => (text.textContent = "Cyber-Sec"), 4000);
      setTimeout(() => (text.textContent = "Developer"), 8000);
    };

    textLoad();
    const interval = setInterval(textLoad, 12000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setOpen(!open);

  const goToContacts = () => navigate("/ContactRut");

  const Counter = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.max(10, duration / value);

      const counter = setInterval(() => {
        start++;
        setCount(start);
        if (start >= value) clearInterval(counter);
      }, stepTime);

      return () => clearInterval(counter);
    }, [value]);

    return <span>{count}</span>;
  };

  return (
    <div className="nav" id="portfolio">
      <div className="dot"></div>
      <div className="dot0"></div>
      <div className="dot1"></div>

      <div className="toone">
        <div className="header">
          {/* Left Content */}
          <div className="hi">
            <div className="appir">
              <div className="h1apr">
                Hey, I'm <span>Destin Marvel</span>
              </div>
              <p>I am a</p>
              <svg viewBox="0 0 2000 300">
                <text x="50%" y="50%" fill="transparent" textAnchor="middle">
                  Software-Developer
                </text>
              </svg>
              <span className="text snd-text">Programmer</span>
            </div>

            {/* Counters */}
            <div className="satisfactory">
              <div className="tory0">
                <div className="tor1">
                  <h1>
                    <Counter value={5} />+
                  </h1>
                  <p>Years of Experience</p>
                </div>
              </div>
              <div className="tory0">
                <div className="tor1">
                  <h1>
                    <Counter value={10} />+
                  </h1>
                  <p>Project Success</p>
                </div>
              </div>
              <div className="tory0">
                <div className="tor1">
                  <h1>
                    <Counter value={91} />%
                  </h1>
                  <p>Satisfied Rate</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="btn-box">
              <button className="smallsc" onClick={toggleMenu}>
                Let’s Talk
              </button>

              <div className={`radial-menu ${open ? "show" : ""}`}>
                <a href="https://telegram.org/dl">
                  <FaTelegram />
                </a>
                <a href="https://m.me/cm/AbbiIbIGeqNXwdET/?send_source=cm%3Acopy_invite_link">
                  <FaFacebookMessenger />
                </a>
                <a href="https://whatsapp.com/dl/">
                  <FaWhatsapp />
                </a>
              </div>

              <button className="smallsc" onClick={goToContacts}>
                Hire Me
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="imageside">
            <div className="imgcontainer">
              <div className="social">
                <a href="https://x.com/Lucasaustin07">
                  <FaXTwitter className="icons twiter" />
                </a>
                <a href="https://github.com/DMZmarvel">
                  <FaGithub className="icons bear" />
                </a>
                <a href="https://www.instagram.com/marvel0490">
                  <FaInstagram className="icons bear" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100073069950448">
                  <FaFacebookF className="icons bear" />
                </a>
                <a href="https://youtube.com/@destinmarvel">
                  <FaYoutube className="icons bear" />
                </a>
                <a href="https://www.linkedin.com/in/destin-marvel-29721427a">
                  <FaLinkedinIn className="icons bear" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
