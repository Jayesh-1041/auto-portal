import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Footer Start Here */}
      <div className="main_footer">
        <div className="car_stor">
          <div className="carhouse">
            <img
              className="carhouse_image"
              src="https://www.shutterstock.com/image-vector/car-shop-logo-design-template-260nw-1757604455.jpg"
              alt=""
            />
            <span className="footer_shop"> CARSHOP</span>
          </div>
          <div className="text_footer">
            Maecenas ne mollis orci. Phasell <br /> iscu sapie non aliquet ex
            euismo ac.
          </div>
          <div className="footer_location">
            <i className="fa-solid fa-location-dot" />
            20/F Green Rooad, Dharnmondi, Dhaka
          </div>
          <div className="footer_contact">
            <i class="bi bi-telephone" />
            +55 4XX-634-7071
          </div>
          <div className="footer_maile">
            <i class="bi bi-envelope" />
            info@themevessel.com
          </div>
          <div className="footer_media">
            <Link to="https://www.facebook.com/">
              <i class="bi bi-facebook" />
            </Link>
            <Link to="https://x.com/?lang=en">
              <i class="bi bi-twitter" />
            </Link>
            <Link to="https://web.whatsapp.com/">
              <i class="bi bi-whatsapp" />
            </Link>
            <Link to="https://www.instagram.com/">
              <i class="bi bi-instagram" />
            </Link>
            <Link to="https://www.google.co.in/">
              <i class="bi bi-google" />
            </Link>
          </div>
        </div>
        <div className="offer">
          <div className="footer_offer">
            <Link to="">WHAT WE OFFER ?</Link>
          </div>
          <hr />
          <ul className="footer_list">
            <Link to="">
              <li>Rent a car now</li>
            </Link>
            <Link to="">
              <li>Search for sale</li>
            </Link>
            <Link to="">
              <li>Best daily dealers</li>
            </Link>
            <Link to="">
              <li>Weekly lucky person</li>
            </Link>
            <Link to="">
              <li>Change car now</li>
            </Link>
            <Link to="">
              <li>Rent a car now</li>
            </Link>
            <Link to="">
              <li>Best daily dealers</li>
            </Link>
            <Link to="">
              <li>Change car color</li>
            </Link>
          </ul>
        </div>

        
        <div className="tags">
          <div className="footer_tag">
            <a href="#">TAGS</a>
          </div>{" "}
          <hr />
          <ul className="footer_apps">
            <Link to="">
              <li>Apps</li>
            </Link>
            <Link to="">
              <li>Gallary</li>
            </Link>
            <Link to="">
              <li>Photography</li>
            </Link>
            <Link to="">
              <li>Web</li>
            </Link>
            <Link to="">
              <li>Books</li>
            </Link>
            <Link to="">
              <li>Busness</li>
            </Link>
            <Link to="">
              <li>Fitness</li>
            </Link>
          </ul>
        </div>


        <div className="footers2">
        <div className="recent_motors">
          <div className="footer_motor">
            <Link to="">RECENT MOTOR</Link>
          </div>
          <hr />
          <div className="footer_image">
            <Link to="">
              <img
                className="footer_img"
                src="https://cdn.pixabay.com/photo/2016/03/14/23/08/jaguar-1256555_1280.jpg"
                alt=""
              />
            </Link>

            <div className="footer_texes">
              <div className="footer_tex">Jaguar f-type r</div>
              {/* <hr /> */}
              <div className="footer_dolar">$105.400</div>
            </div>
          </div>

          <div className="footer_image">
            <Link to="">
              <img
                className="footer_img"
                src="https://p0.pikist.com/photos/465/198/auto-automotive-badge-benz-brand-car-class-classic-design-thumbnail.jpg"
                alt=""
              />
            </Link>

            <div className="footer_texes">
              <div className="footer_tex">Mercedes Benz C Class</div>
              {/* <hr /> */}
              <div className="footer_dolar">$42.000</div>
            </div>
          </div>

          <div className="footer_image">
            <Link to="">
              <img
                className="footer_img"
                src="https://cdn.pixabay.com/photo/2018/02/21/03/15/bmw-m4-3169357_1280.jpg"
                alt=""
              />
            </Link>

            <div className="footer_texes">
              <div className="footer_tex">BMW e46 m3 diski serie</div>
              {/* <hr /> */}
              <div className="footer_dolar">$49.000</div>
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="footer_gallery">
            <Link to="">GALLERY</Link>
            <hr />
            <div className="footer_gallerys">
              <div className="gallery1">
                <Link to="">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/02/21/03/15/bmw-m4-3169357_1280.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="gallery2">
                <Link to="">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/10/04/05/16/stance-1713593_1280.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="gallery3">
                <Link to="">
                  <img
                    src="https://cdn.pixabay.com/photo/2020/01/10/09/27/bmw-4754864_1280.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="gallery4">
                <Link to="">
                  <img
                    src="https://p0.pikist.com/photos/465/198/auto-automotive-badge-benz-brand-car-class-classic-design-thumbnail.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="gallery5">
                <Link to="">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/08/05/07/39/mercedes-benz-3585098_1280.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="gallery6">
                <Link to="">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/03/14/23/11/jaguar-1256572_960_720.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="gallery7">
                <Link to="">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/04/09/08/45/sports-car-1317645_1280.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="gallery8">
                <Link to="">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/03/14/23/08/jaguar-1256547_1280.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="gallery9">
                <Link to="">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/12/04/08/02/jaguar-1076206_1280.jpg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="footer_copyright">
        <div className="copyright">
          <a href="#">
            <i class="bi bi-c-circle"></i>
            2024 All rights reserved Carhouse Retail Ltd.
          </a>
        </div>
      </div>
    </>
  );
};
export default Footer;
