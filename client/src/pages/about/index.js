import React from "react";

function About() {
  return (
    <>
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <div className="imgContainer">
            <img
              className="mainImg"
              src="/about us.jpg"
            />
          </div>
          <div className="responsive-container-block textSide">
            <p className="text-blk heading">ABOUT US</p>
            <p className="text-blk subHeading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              purus lectus viverra in semper nec pretium mus. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Eget purus lectus viverra
              in semper nec pretium mus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Eget purus lectus viverra in semper nec pretium
              mus.
            </p>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img
                  className="cardImg"
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"
                />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">OUR MISSION</p>
                <p className="text-blk cardSubHeading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img
                  className="cardImg"
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"
                />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">OUR VISION</p>
                <p className="text-blk cardSubHeading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img
                  className="cardImg"
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"
                />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">OUR GOALS</p>
                <p className="text-blk cardSubHeading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img
                  className="cardImg"
                  src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"
                />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">OUR FEATURES</p>
                <p className="text-blk cardSubHeading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default About;