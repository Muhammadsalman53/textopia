import React from "react";
import { TextopiaHeader } from "../header/Header";
import "./generatingVideo.css"

// setTimeout(function() {
//   window.location.replace('/final');
// }, 1000);

export const GeneratingVideo = () => {
  return (
    <div>
      <TextopiaHeader />
      <div className="textopia-generating-video-header-below">
        <div className="inside-generating-video-header-below">
          </div>
        <div className="inside-generating-video-text-area">
          <div className="text-generating-video-area">
             <div className="generating-text">
                <span style={{
              background:
                "linear-gradient(70.43deg, #1138B1 -21.66%, #00E6E6 100.17%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}>Generating video</span>
                
             </div>
             <div >
             <img className="gif-img" src="/images/Loader.gif" alt="" />
             </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
