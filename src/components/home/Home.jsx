import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/video-script");
  };

  return (
    <div className="home-container">
      <div className="below-home-container">
      <div className="above-header">
        <div className="home-header">
          <img className="logo" src="/images/textopia_logo.png" />
          <h3>Textopia</h3>
        </div>
      </div>
      <div className="below-home-header">
        <div className="after-header">
          <div className="web-area">
            <h1
              style={{
                background:
                  "linear-gradient(70.43deg, #1138B1 -21.66%, #00E6E6 100.17%)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
              }}
            >
              Best AI text to video generator
            </h1>
            <div className="home-text">
              <p>
                Experience the future of content creation with Textopia - The
                best AI Text to Video Generator, transforming your words into
                immersive visual stories.
              </p>
            </div>
          </div>
          <div className="textopia-video">
            <div className="inside-textopia-video">
              <span className="Text-inside-video">Textopia working video</span>
            </div>
            <div>
              {/* <button onClick={routeChange} className="create-free-viedo-mobile-btn">Create Free video</button> */}
            </div>
          </div>
        </div>
        <div className="home-btn">
          <button onClick={routeChange} className="create-free-viedo-btn">
            Create Free video
          </button>
        </div>
      </div>
      </div>
      <div className="footer">
        <div className="home-footer">
          <div className="inside-footer">
            Trusted by millions of users across the globe
          </div>
          <div className="inside-footer2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            nemo ex necessitatibus qui in? Quo vero neque velit possimus quia
          </div>
        </div>
      </div>
    </div>
  );
};
