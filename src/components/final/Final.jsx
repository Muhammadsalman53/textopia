import React, { useEffect, useState } from "react";
import { TextopiaHeader } from "../header/Header";
import "./final.css";
import { useNavigate } from "react-router-dom";
import { GeneratingVideo } from "../generatingVideo/GeneratingVideo";



export const Final = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 5000);
  }, []);

  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/video-script");
  };

  const routeChange2 = () => {
    navigate("/select-avatar");
  };

  const routeChange3 = () => {
    navigate("/select-voice");
  };
  return (
    <>
    {isLoading ? (
      <GeneratingVideo/>
    ): (  
    <div>
      <TextopiaHeader />
      <div className="textopia-final-header-below">
        <div className="above-final-video-header">
          <div className="inside-final-video-header-below">
            <div>
              <span className="final-video-text">Final Video</span>
            </div>
          </div>
          <div className="inside-final-video-text-area">
            <div className="final-video-area">
              <div className="inside-final-video-area">
                <div className="your-video">
                  <img className="final-img" src="/images/avtar.png" />
                </div>

                <div className="right-side-of-video-area">
                  <div className="inside-right-side">
                    <div className="upper-right-side">
                      <div onClick={routeChange}className="edit-video-script">
                        <img
                          className="edit-img"
                          src="/images/edit_video_script.png"
                        />
                        <span className="right-div-text">Edit Video Script</span>
                      </div>
                      <div onClick={routeChange2} className="change-avtar">
                        <img
                          className="edit-img"
                          src="/images/change_avatar.png"
                        />
                        <span className="right-div-text">Change Avatar</span>
                      </div>
                      <div onClick={routeChange3} className="change-voice-model">
                        <img
                          className="edit-img"
                          src="/images/change_voice_model.png"
                        />{" "}
                        <span className="right-div-text">Change Voice Model</span>
                      </div>
                    </div>
                  </div>

                  <div className="right-side-btn">
                    <button className="final-button">
                      {" "}
                      <img
                        className="final-btn-img"
                        src="/images/download.png"
                      />
                      <span className="download-now">Download Video</span>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side-mobile-btn">
                    <button className="final-button-mbl">
                      {" "}
                      <img
                        className="final-btn-img-mbl"
                        src="/images/download.png"
                      />
                      <span className="download-now-mbl">Download Video</span>{" "}
                    </button>
                  </div>
      </div>
    </div>
    )}
    </>
  );
};
