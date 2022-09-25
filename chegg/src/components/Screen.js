import React, { useState, useEffect } from "react";
import axios from "axios";
import video1 from "../video/video1.mp4";
import ChatBot from "react-simple-chatbot";

function Screen() {
  const [flag, setFlag] = useState(false);
  const [lang, setLang] = useState([]);
  const [subtitle, setSub] = useState("");

  useEffect(() => {
    getLanguage();
  }, []);
  const getLanguage = async () => {
    let result = await axios
      .get("https://cheggproject1.herokuapp.com/language")
      .then((res) => {
        setLang(res.data);
        // console.log(res.data);
      });
  };

  const handleClick = () => {
    setFlag(true);
  };
  const doubleClick=()=>{
    setFlag(false)
  }

  return (
    <div className="container main-screen">
      <div className="d-flex justify-content-around">
        <div className="textarea w-50 my-2">
          <div>
            <ul className="nav nav-tabs mt-5">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link btn btn-info active"
                  data-bs-toggle="tab"
                  id="home-tab"
                  type="button"
                  data-bs-target="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Text Editor
                </a>
              </li>

              <li className="nav-item" role="presentation">
                <a
                  className="nav-link btn btn-info"
                  data-bs-toggle="tab"
                  id="draw-tab"
                  type="button"
                  data-bs-target="#draw"
                  role="tab"
                  aria-controls="draw"
                  aria-selected="true"
                >
                  {" "}
                  Whiteboard
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link btn btn-info"
                  data-bs-toggle="tab"
                  id="code-tab"
                  type="button"
                  data-bs-target="#code"
                  role="tab"
                  aria-controls="code"
                  aria-selected="true"
                >
                  {" "}
                  Code Editor
                </a>
              </li>
            </ul>
            <div className="tab-control w-75" id="#myTabControl">
              <div
                className="tab-pane fade show"
                role="tabpanel"
                id="home"
                aria-labelledby="home-tab"
              >
                <textarea rows="12" cols="80" placeholder="Start ........." />
              </div>
            </div>
          </div>
          <div className="d-flex mt-5 subtitle">
            <h3>Subtitles</h3>
            <div className="mx-3 subtitle-btn">
              <select
                className="form-select btn-outline-warning"
                aria-label="Default select example"
               
                value={subtitle}
                onChange={(e) => {
                  setSub(e.target.value);
                  // console.log(e.target.value);
                }}
              >
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>
          </div>
          <div className="my-2 subtitle-text">
            <ul>
              {subtitle === "Hindi" ? (
                <>
                  {lang
                    .filter((i) => i._id === "632b884c8ec2e2a514f11ca8")
                    .map((i) => {
                      return (
                        <>
                          <div key={i._id}>{i.subtitle}</div>
                        </>
                      );
                    })}
                </>
              ) : (
                <div>
                  {lang
                    .filter((i) => i._id === "632b86864b97dfac274df970")
                    .map((i) => {
                      return (
                        <>
                          <div key={i._id}>{i.subtitle}</div>
                        </>
                      );
                    })}
                </div>
              )}
            </ul>
          </div>
        </div>
        <div className="d-flex flex-column right text-center mt-2">
          <video src={video1} controls="control" width="600px" height="400px" />
          <div className="chat-section ">
            <button className="btn btn-outline-dark w-50 subtitle-button" onClick={handleClick} onDoubleClick={doubleClick}>
              Live chat
            </button>
            {flag ? (
              <ChatBot
                className="chat my-5 mx-auto"
                steps={[
                  {
                    id: "1",
                    message: "hii How may I help you?",
                    trigger: "2",
                  },
                  {
                    id: "2",
                    options: [
                      { value: 1, label: "Technical issue", trigger: "3" },
                      { value: 2, label: "chat with tutor", trigger: "4" },
                      
                    ],
                  },
                  {
                    id: "3",
                    options: [
                      { value: 1, label: "video issue", trigger: "5" },
                      { value: 2, label: "audio issue", trigger: "5" },
                      
                    ],
                  },
                  {
                    id: "4",
                    message: "Request has been sent",
                    end:true
                  },
                  {
                    id: "5",
                    message: "Sorry for the inconvenience, We will solve the problem soon",
                    end: true,
                  },
                ]}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen;
