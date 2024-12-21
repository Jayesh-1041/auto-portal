import React from "react";

const Artical = () => {
  return (
    <>
      {/* Artical Start here */}
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
              <div className="artical">
                <div className="artical_star">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                  <br />
                  -----------
                </div>
                <div className="text_artical">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  architecto quis aut magni? Expedita commodi saepe rem nam
                  neque! Doloremque expedita repellat laudantium facilis?
                  Voluptate sint dignissimos, officia magni asperiores quas
                  quasi dolor voluptatibus vitae dicta repellendus tenetur totam
                  cumque.
                </div>
                <div className="dealer">
                  <img
                    className="dealer_img"
                    src="https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571_1280.jpg"
                    style={{ height: "100px", width: "100px" }}
                    alt=""
                  />
                  <div className="dealer_name">MARIA MORRIS</div>
                  <hr />
                  <div className="car_dealer">Car Dealer</div>
                </div>
                <div className="dot_icon">
                  <i class="bi bi-circle-fill"></i>
                  <i class="bi bi-circle-fill"></i>
                  <i class="bi bi-circle-fill"></i>
                  <i class="bi bi-circle-fill" id="circal"></i>
                </div>
              </div>

              <div className="carousel-caption"></div>
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
export default Artical;
