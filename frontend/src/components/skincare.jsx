import React from "react";
import "../css/skincare.css";
import "../css/media.css";
import skinstep1img from "../images/skincare/ORD-PLP-Category-FacialCleansers.webp";
import skinstep2imgflex1 from "../images/eye-serums-mpes.webp";
import skinstep2imgflex2 from "../images/ORD-PLP-Category-Exfoliators.webp";
import skinstep2imgflex3 from "../images/ORD-PLP-Category-FaceMasques.webp";
import skincarestep3img from "../images/step_skincare_3.jpg";
import skincarevideo from "../images/skincare/pexels-nick-bondarev-6565143 (1080p).mp4";
import skincaregrid1 from "../images/skincare/skincare_final_grid_1.jpg";
import skincaregrid2 from "../images/skincare/skincare_final_grid_2.jpg";
import skincaregrid3 from "../images/skincare/skincare_final_grid_3.jpg";
// import skincaregrid4 from "../images/skincare/skincare_final_grid_4.jpg";
const Skincare = () => {
  return (
    <div>
      <section className="section_1_skincare">
        <h1 className="heading">Skincare Steps</h1>
      </section>
      <section>
        <div className="container">
          <h1 className="small_heading steps_heading">Shop By Step</h1>
          <div className="skincare_step_1_flex">
            <div>
              <div className="steps">Step 1: Prep</div>
              <p className="para steps_para">
                Cleanse the skin and prepare it to receive active ingredients.
              </p>
              <img className="step_img_1" src={skinstep1img} alt="" srcset="" />
              <h1 className="small_heading steps_heading">Facial Cleansers</h1>
              <p className="para steps_para">
                Help remove suface impurities, excess oil and makeup.
              </p>
            </div>
            <div className="video_skincare">
              <video autoPlay loop muted>
                <source src={skincarevideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <h1 className="steps">Step 2: Treat</h1>
          <p className="para steps_para">
            Address specific skin concerns using targeted formulas.
          </p>
          <div className="flex_steps_2">
            <div>
              <img src={skinstep2imgflex1} alt="Step 2 of skin care " />

              <h1 className="steps">Eye Serum</h1>
              <p className="para steps_para">
                Cleanse the skin and prepare it to receive active ingredients.
              </p>
            </div>
            <div>
              <div>
                <img src={skinstep2imgflex3} alt="Face Masques" />
              </div>
              <h1 className="steps">Face Masques</h1>
              <p className="para steps_para">
                Cleanse the skin and prepare it to receive active ingredients.
              </p>
            </div>
            <div>
              <div>
                <img src={skinstep2imgflex2} alt="Eye serum" />
              </div>
              <h1 className="steps">Eye Serum</h1>
              <p className="para steps_para">
                Cleanse the skin and prepare it to receive active ingredients.
              </p>
            </div>
          </div>
          <div className="step_3_skincare">
            <div className="step_3_skincare_content">
              <h1 className="heading">Final Skincare Step</h1>
              <h1 className="steps">Moisturizers</h1>
              <p className="para steps_para">
                Seal and support skin barrier by keeping skin hydrated.
              </p>
            </div>
            <div className="step_3_skincare_imgs">
              <div>
                <img
                  className="img_4_gird_skincare"
                  src={skincarestep3img}
                  alt="skincare"
                />
              </div>
              <div>
                <img src={skincaregrid2} alt="Skin img" />
              </div>
              <div>
                <img src={skincaregrid3} alt="Skin img" />
              </div>
              <div>
                <img src={skincaregrid1} alt="Skin img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skincare;
