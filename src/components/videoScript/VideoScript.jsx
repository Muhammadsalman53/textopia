import React, { useState } from "react";
import { TextopiaHeader } from "../header/Header";
import "./videoScript.css";
import { useNavigate } from "react-router-dom";

export const VideoScript = () => {
  const [inputValue, setInputValue] = useState("");
  const [isButtonClickable, setIsButtonClickable] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsButtonClickable(value !== "");
  };

  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/select-avatar");
  };

  const routeChange2 = () => {
    navigate("/");
  };

  return (
    <div>
      <TextopiaHeader />
      <div className="textopia-video-header-below">
        <div className="above-textopia-video-header">
          <div className="inside-video-header-below">
            <div className="back-arrow-img">
              <img
                onClick={routeChange2}
                className="back-arrow"
                src="/images/backarrow.png"
                alt=""
              />
            </div>

            <div>
              <span className="video-script">
                Please enter the video script
              </span>
            </div>
            <div className="item-three"></div>
          </div>
          <div className="horizontal-line"></div>
          <div className="inside-video-text-area">
            <div className="text-video-area">
              <textarea
                value={inputValue}
                onChange={handleInputChange}
                type="text"
                placeholder="Write Script here...."
              ></textarea>
            </div>
          </div>
          <div className="videoScript-btn">
            <button
              disabled={!inputValue}
              onClick={routeChange}
              className={`${
                isButtonClickable ? "gradient1" : "video-unselected-btn"
              } video-script-btn `}
            >
              {!isButtonClickable ? "Enter Text First" : "Select Avatar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
