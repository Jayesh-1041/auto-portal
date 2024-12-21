import React from "react";

const Slider = () => {
  return (
    <>
      <div className="containe">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://media.wired.com/photos/6580ba9fc9d019ec4391c2b9/191:100/w_1280,c_limit/Reuelto_Grigio%20Telesto_001.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption  d-md-block">
                <div className="main_text">
                  <span className="main_text1">WE ARE WHEEL</span>
                  <span className="main_text2">PORSCHE 911 TURBO</span>
                  <span className="main_text3">
                    Attract, High Performance, &amp; Convert <br /> Outstanding
                    Technology Combined
                  </span>
                </div>
              </div>
            </div>

          <div className="carousel-item">
            <img
              src="https://cimg0.ibsrv.net/ibimg/hgm/1920x1080-1/100/502/audi_100502688.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-md-block">
              <div className="main_text">
                <span className="main_text1">WE ARE WHEEL</span>
                <span className="main_text2" style={{ color: "white" }}>
                  Audi R8 e-tron
                </span>
                <span className="main_text3">
                  Attract, High Performance, &amp; Convert <br /> Outstanding
                  Technology Combined
                </span>
              </div>
            </div>
          </div>

          

            <div className="carousel-item">
              <img
                src="https://th.bing.com/th/id/R.8fb7a463e57c91661d3029d76eeb1596?rik=f7SWCo8zWxcaJg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-FSTZ3GOaupU%2fTuXBaPZcGLI%2fAAAAAAAAFbc%2fA9NFIumaBcM%2fs1920%2fAudi-cars-wallpaper-6.jpg&ehk=u1El28u3ONvgMCkardO56EtzMu7evgYhLxzxfjpKt1w%3d&risl=&pid=ImgRaw&r=0"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-md-block">
                <div className="main_text">
                  <span className="main_text1">WE ARE WHEEL</span>
                  <span className="main_text2">Audi Q7</span>
                  <span className="main_text3">
                    Attract, High Performance, &amp; Convert <br /> Outstanding
                    Technology Combined
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
