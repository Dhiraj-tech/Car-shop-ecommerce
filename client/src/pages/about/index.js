import React, { useState } from "react";

function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <>
      <section id="page-title" className="page-title">
        <div className="container">
          <div className="row">
            <h1 className="text-center">ABOUT</h1>
          </div>
        </div>
      </section>

      <section id="featured1" className="featured featured-1">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6">
              <div className="heading">
                <p className="subheading">History</p>
                <h2>The Company</h2>
              </div>
              <div className="accordion">
                <div className="accordion-header" onClick={toggleAccordion}>
                  <h6>ABOUT COMPANY</h6>
                  <span
                    className={
                      isOpen ? "accordion-icon rotate" : "accordion-icon"
                    }
                  ></span>
                </div>
                {isOpen && (
                  <div className="accordion-content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat minus expedita dicta assumenda distinctio ipsa
                      iure, repellendus placeat blanditiis. Aliquam nisi dolorum
                      laudantium nostrum minus doloribus tempora adipisci
                      quisquam quaerat, reiciendis dignissimos ea excepturi
                      quidem vel repellendus aperiam odio reprehenderit. Vero,
                      est ex? Ex vel modi dicta ducimus placeat labore!
                    </p>
                  </div>
                )}
              </div>
              <div className="accordion">
                <div className="accordion-header" onClick={toggleAccordion1}>
                  <h6>OUR MISSION</h6>
                  <span
                    className={
                      isOpen1 ? "accordion-icon rotate" : "accordion-icon"
                    }
                  ></span>
                </div>
                {isOpen1 && (
                  <div className="accordion-content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat minus expedita dicta assumenda distinctio ipsa
                      iure, repellendus placeat blanditiis. Aliquam nisi dolorum
                      laudantium nostrum minus doloribus tempora adipisci
                      quisquam quaerat, reiciendis dignissimos ea excepturi
                      quidem vel repellendus aperiam odio reprehenderit. Vero,
                      est ex? Ex vel modi dicta ducimus placeat labore!
                    </p>
                  </div>
                )}
              </div>
              <div className="accordion">
                <div className="accordion-header" onClick={toggleAccordion2}>
                  <h6>OUR VISION</h6>
                  <span
                    className={
                      isOpen2 ? "accordion-icon rotate" : "accordion-icon"
                    }
                  ></span>
                </div>
                {isOpen2 && (
                  <div className="accordion-content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat minus expedita dicta assumenda distinctio ipsa
                      iure, repellendus placeat blanditiis. Aliquam nisi dolorum
                      laudantium nostrum minus doloribus tempora adipisci
                      quisquam quaerat, reiciendis dignissimos ea excepturi
                      quidem vel repellendus aperiam odio reprehenderit. Vero,
                      est ex? Ex vel modi dicta ducimus placeat labore!
                    </p>
                  </div>
                )}
              </div>
              <div className="accordion">
                <div className="accordion-header" onClick={toggleAccordion3}>
                  <h6>OUR GOALS</h6>
                  <span
                    className={
                      isOpen3 ? "accordion-icon rotate" : "accordion-icon"
                    }
                  ></span>
                </div>
                {isOpen3 && (
                  <div className="accordion-content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat minus expedita dicta assumenda distinctio ipsa
                      iure, repellendus placeat blanditiis. Aliquam nisi dolorum
                      laudantium nostrum minus doloribus tempora adipisci
                      quisquam quaerat, reiciendis dignissimos ea excepturi
                      quidem vel repellendus aperiam odio reprehenderit. Vero,
                      est ex? Ex vel modi dicta ducimus placeat labore!
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6">
              <div className="heading">
                <p className="subheading">We Are Good</p>
                <h2>Our Features</h2>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="feature-panel">
                    <div className="feature-icon">
                      <i className="fa-regular fa-clock"></i>
                    </div>
                    <h4 className="featured-title">Always Available</h4>
                    <p>
                      Duis dapibus aliquam mi, et euismod scelerisque ut.
                      Vivamus elit quis urna adipiscing ...
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="feature-panel">
                    <div className="feature-icon">
                      <i className="fa-brands fa-black-tie"></i>
                    </div>
                    <h4 className="featured-title">Qualified Agents</h4>
                    <p>
                      Duis dapibus aliquam mi, et euismod scelerisque ut.
                      Vivamus elit quis urna adipiscing ...
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="feature-panel mb-0">
                    <div className="feature-icon">
                      <i className="fa-solid fa-wallet"></i>
                    </div>
                    <h4 className="featured-title">Fair Prices</h4>
                    <p>
                      you can be 100% sure that it will be delivered right on
                      time, within the set budget limits
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="feature-panel mb-0">
                    <div className="feature-icon">
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <h4 className="featured-title">Best Offers</h4>
                    <p>
                      Duis dapibus aliquam mi, et euismod scelerisque ut.
                      Vivamus elit quis urna adipiscing ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
