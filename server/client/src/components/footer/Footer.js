import React from "react";
import "assets/css/Footer/footer.css";

export default () => {
  return (
    <div className="container">
      <nav className="nav-footer">
        <div className="div-footer">
          <h4 className="h4-footer"> You're in Good Hands </h4>

          <p className="p-footer-description">
            {" "}
            Join millions of people around the world and SlackOff
          </p>

          <p className="p-footer">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Jacwutang"
            >
              <img src={require("../../images/GitHub.png")} alt="github" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jacwutang/"
            >
              <img src={require("../../images/In.png")} alt="linkedin" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://jackwu.rocks/"
            >
              <img
                src={require("../../images/briefcase.png")}
                alt="portfolio"
              />
            </a>
          </p>
        </div>
      </nav>
    </div>
  );
};
