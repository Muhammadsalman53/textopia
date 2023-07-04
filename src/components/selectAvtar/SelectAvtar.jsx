import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextopiaHeader } from "../header/Header";
import "./selectAvtar.css";
import { Check } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const SelectAvtar = () => {
  const [selectedDiv, setSelectedDiv] = React.useState("");

  // const handleDivClick = (divId) => {
  //   if (selectedDiv === divId) {
  //     setSelectedDiv(null); // Deselect the div if it's already selected
  //   } else {
  //     setSelectedDiv(divId); // Select the div if it's not selected
  //   }
  // };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: 3,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const avatars = [
    { imgLink: "./images/avtar.png" },
    { imgLink: "./images/avtar.png" },
    { imgLink: "./images/avtar.png" },
    { imgLink: "./images/avtar.png" },
    { imgLink: "./images/avtar.png" },
    { imgLink: "./images/avtar.png" },
    { imgLink: "./images/avtar.png" },
    { imgLink: "./images/avtar.png" },
    { imgLink: "./images/avtar.png" },
  ];

  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/select-voice");
  };

  const routeChange2 = () => {
    navigate("/video-script");
  };

  return (
    <div>
      <TextopiaHeader />
      <div className="select-avatar-header-below">
        <div className="above-inside-select-header-avatar">
          <div className="inside-select-avatar-header-below">
            <div onClick={routeChange2} className="back-arrow-img">
              <img
                className="back-arrow-select-avatar"
                src="/images/backarrow.png"
                alt=""
              />
            </div>
            <span className="video-script">Select an Avatar</span>
            <div className="item-three-select-avatar"></div>
          </div>
          <div className="inside-select-avatar-area">
            <div className="horizontal-line"></div>
            <div className="select-avatar-area">
              
                <div className="select-avtar">
                  {avatars.map((item, index) => (
                    <div
                      id={`avatar${index}`}
                      className={
                        selectedDiv == `avatar${index}`
                          ? "avatar avatar-selected"
                          : "avatar avatar-unselected"
                      }
                      onClick={() => {
                        setSelectedDiv(`avatar${index}`);
                      }}
                    >
                      <img className="avatar-image" src={item.imgLink} />
                      <div
                        className={
                          selectedDiv == `avatar${index}`
                            ? "avatar-selected-overlay"
                            : "avatar-unselected-overlay"
                        }
                      >
                        <Check
                          sx={{ fontSize: "60px", color: "#fff", opacity: 1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              

              
                <div onClick={handleOpen} className="upload-your-avtar">
                  <span className="turn-yourself">Turn yourself into an</span>

                  <span className="turn-yourself">avatar</span>
                  <span id="upload-pic-text">
                    Upload or Capture a picture of yourself to use it in your
                    videos
                  </span>
                </div>
              
            </div>

            <div>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
              >
                <Fade in={open}>
                  <Box className="select-avatar-box" sx={style}>
                    <Box className="upload-photo">
                      <Typography sx={{ color: "#004675" }}>
                        Upload Photo
                      </Typography>
                    </Box>
                    <Box className="capture-photo">
                      <Typography sx={{ color: "Black" }}>
                        Capture Photo
                      </Typography>
                    </Box>
                  </Box>
                </Fade>
              </Modal>
            </div>
          </div>

          <div className="select-avatar-btn">
            <button
              className={`${
                !selectedDiv
                  ? "unselected-avatar-color-btn"
                  : "selected-avatar-color-btn"
              } avatar-video-script-btn`}
              disabled={!selectedDiv}
              onClick={routeChange}
            >
              {!selectedDiv ? "Choose an Avatar First" : "Select Voice"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
