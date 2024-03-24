import React from "react";
import video from "../images/videohome.mp4";
import "../css/home.css";
import "../css/media.css";
import sec2imgproduct from "../images/D070122-SlotE.webp";
import sec2imgproduct2 from "../images/D070122-1-SlotF.webp";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
const Home = () => {
  return (
    <div>
      <div className="section_home_1">
        <div className="container">
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video_wrapper">
          <div className="container video_content">
            <h1 className="heading">
              Essential cruelty-free skincare for a glowy and healthy skin.
            </h1>
            <a href="" className="main_btn">
              Shop our products
            </a>
          </div>
        </div>
      </div>
      <section className="section_2_home">
        <div className="container">
          <h1 className="small_heading_content">Made By natural resources</h1>
          <div>
            <div className="sec_2_grid">
              <div>
                <div className="mainimg_sec2_col_1">
                  <img
                    className="img_sec2_col_1"
                    src={sec2imgproduct}
                    alt="imgproducts"
                  />
                </div>
                <div>
                  <div>
                    {" "}
                    <div className="line_heading_flex">
                      <h3 className="small_heading ordinary_builder">
                        THE ORDINARY REGIMEN BUILDER.
                      </h3>
                      <div className="line_builder"></div>
                    </div>
                    <div className="para_heading_flex">
                      {" "}
                      <p className="para_sec2_col_1">
                        The Ordinary Regimen Builder is a simple four-minute
                        quiz that targets several common skin concerns. The
                        results offer product recommendations suitable for all
                        skin types.
                      </p>
                      <button>
                        <TrendingFlatIcon
                          style={{ fontSize: "35px" }}
                        ></TrendingFlatIcon>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main_sec2_col_2">
                <div>
                  <img
                    className="img_sec2_col_2"
                    src={sec2imgproduct2}
                    alt="imgproduct"
                  />
                </div>
                <h1>A message to fellow humans.</h1>
                <p>
                  Commit to Change, Change will Come takes an honest look at how
                  we can improve our commitment to fighting racial and social
                  injustice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //////////////////////////////////////section 3  */}
      <section className="section_3_home">
        <div className="container">
          <div className="section_3_hydration_box">
            <h1 className="small_heading">Hydration, All Winter Long.</h1>
            <p className="para">
              Cold weather doesn’t have to mean dry skin. Keep skin hydrated
              with our hydrating products.
            </p>
            <a href="" className="main_btn">
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
