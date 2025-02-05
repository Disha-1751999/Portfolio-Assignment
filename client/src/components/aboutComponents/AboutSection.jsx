import React from "react";

import about from "../../assets/images/about.png";

function AboutSection() {
  return (
    <>
      <div className="container my-5">
        <div className="row mt-5">
          <div className=" col-md-6 lightColor p-4 p-md-0 ">
            <div className="d-flex justify-content-center  flex-column ">
              <h1 className=" bolderFont upperCase  h-100 lh-sm letter-spacing word-spacing mt-md-5 ">
                About <span className="themeColor">Us </span>
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                ipsa natus, sunt nam maxime placeat ut, explicabo perferendis
                consequatur labore eaque et incidunt, tempora nisi repudiandae
                earum quam esse minima quisquam. Eius deserunt impedit quisquam
                necessitatibus provident enim repellendus repudiandae, tempora
                quos excepturi, cumque dolores temporibus sequi Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Aspernatur amet
                cumque libero necessitatibus molestiae iure obcaecati suscipit
                sit quod. Architecto nesciunt asperiores enim natus neque?
                Perferendis voluptatibus facilis fugit soluta.
              </p>
              <div></div>
            </div>
          </div>
          <div className="col-md-6 mt-3" >
            <img src={about} alt="" className="w-75 w-md-100 my-auto mx-auto d-block " />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
