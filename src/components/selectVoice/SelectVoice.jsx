import React, { useEffect, useState } from "react";
import { TextopiaHeader } from "../header/Header";
import "./selectVoice.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

export const SelectVoice = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [buttonColor, setButtonColor] = useState("transparent");
  const [selectedDiv, setSelectedDiv] = useState("");
  const [redirect, setRedirect] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setButtonColor(open ? "transparent" : "white");
  };

  const handleClose = () => {
    setAnchorEl(null);
    setButtonColor("transparent");
  };

  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/final");
  };

  const routeChange2 = () => {
    navigate("/select-avatar");
  };

  // const navigation = useNavigation();
  

  

  const select_voice = [
    {
      imgLink: "/images/astarila.png",
      text: "John",
      imgLink1: "/images/play.png",
    },
    {
      imgLink: "/images/astarila.png",
      text: "John",
      imgLink1: "/images/play.png",
    },
    {
      imgLink: "/images/astarila.png",
      text: "John",
      imgLink1: "/images/play.png",
    },
    {
      imgLink: "/images/astarila.png",
      text: "John",
      imgLink1: "/images/play.png",
    },
    {
      imgLink: "/images/astarila.png",
      text: "John",
      imgLink1: "/images/play.png",
    },
    {
      imgLink: "/images/astarila.png",
      text: "John",
      imgLink1: "/images/play.png",
    },
    {
      imgLink: "/images/astarila.png",
      text: "John",
      imgLink1: "/images/play.png",
    },
    {
      imgLink: "/images/astarila.png",
      text: "John",
      imgLink1: "/images/play.png",
    },
    {
      imgLink: "/images/astarila.png",
      text: "John",
      imgLink1: "/images/play.png",
    },
    {
      imgLink: "/images/astarila.png",
      text: "John",
      imgLink1: "/images/play.png",
    },
    {
      imgLink: "/images/astarila.png",
      text: "John",
      imgLink1: "/images/play.png",
    },
    {
      imgLink: "/images/astarila.png",
      text: "John",
      imgLink1: "/images/play.png",
    },
    {
      imgLink: "/images/astarila.png",
      text: "John",
      imgLink1: "/images/play.png",
    },
    {
      imgLink: "/images/astarila.png",
      text: "John",
      imgLink1: "/images/play.png",
    },
    {
      imgLink: "/images/astarila.png",
      text: "John",
      imgLink1: "/images/play.png",
    },
    {
      imgLink: "/images/astarila.png",
      text: "John",
      imgLink1: "/images/play.png",
    },
    {
      imgLink: "/images/astarila.png",
      text: "John",
      imgLink1: "/images/play.png",
    },
    {
      imgLink: "/images/astarila.png",
      text: "John",
      imgLink1: "/images/play.png",
    },
    {
      imgLink: "/images/astarila.png",
      text: "John",
      imgLink1: "/images/play.png",
    },
    {
      imgLink: "/images/astarila.png",
      text: "John",
      imgLink1: "/images/play.png",
    },
    {
      imgLink: "/images/astarila.png",
      text: "John",
      imgLink1: "/images/play.png",
    },
  ];

  return (
    <div>
      <TextopiaHeader />
      <div className="textopia-select-voice-header-below">
        <div className="above-select-voice-area">
        <div className="inside-select-voice-below">
        <div className="left-side-select-voice">
          <div className="back-arrow-img-voice">
            <img
              className="back-arrow-voice"
              src="/images/backarrow.png"
              onClick={routeChange2}
            />
          </div>
          <div className="select-a-voice"> Select a voice</div>
          </div>
          <div className="sort-voice">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{
                backgroundColor: buttonColor,
                borderRadius: "15px 15px 0px 0px",
                // border: '1px solid black',
                width: "86px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img className="img-sort" src="/images/sort.png" alt="" />
              <span
              className="menu-btn-select-voice"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  textAlign: "center",
                }}
              >
                Sort
              </span>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
                sx: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                },
              }}
              PaperProps={{
                sx: {
                  marginTop: "0",
                  boxShadow: "none",
                  borderRadius: "0 0 5px 5px",
                  // animation: open
                  //   ? "slideDown 2.5s ease-in-out forwards"
                  //   : "none",
                },
              }}
              sx={{
                width: "186px",
                marginTop: "0",

                "& .MuiMenuItem-root": {
                  paddingTop: "0",
                },
              }}
            >
              <MenuItem
                sx={{
                  color: "blue",
                }}
                onClick={handleClose}
              >
                Age
              </MenuItem>
              <MenuItem
                sx={{
                  color: "blue",
                }}
                onClick={handleClose}
              >
                Gender
              </MenuItem>
              <MenuItem
                sx={{
                  color: "blue",
                }}
                onClick={handleClose}
              >
                Accent
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="horizontal-line"></div>
        <div className="inside-select-voice-area">
          <div className="select-voice-area">
            <div className="select-voice">

            {select_voice.map((item, index) => (
              <div
                id={`select_voice${index}`}
                  className={
                    selectedDiv == `select_voice${index}`
                      ? "different-voice selected"
                      : "different-voice"
                  }
                  onClick={() => {
                    setSelectedDiv(`select_voice${index}`);
                  }}
>
                  <img className="play-btn" src={item.imgLink1} />
                  <span className="voice-name">{item.text}</span>
                  <span></span>
                  <span></span>
                  <img className="astarila" src={item.imgLink} />
                </div>
            ))}
            </div>
          </div>
          
        </div>
        </div>
        <div className="above-select-voice-btn">
        <button
            className={`${
              !selectedDiv ? "unselected-color" : "selected-color"
            } select-voice-btn`}
            disabled={!selectedDiv}
            onClick={routeChange}
          >
            {!selectedDiv ? "Select a voice model" : "Generate Video"}
          </button>
          </div>
      </div>
    </div>
  );
};
