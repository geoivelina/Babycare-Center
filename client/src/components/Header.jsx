export default function Header(){
    return (
        
<div className="hero_area">
    <header className="header_section">
      <div className="contact_nav_container">
        <div className="container">
          <div className="contact_nav">
            <a href="">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                Address : wisigaton lpusm loram
              </span>
            </a>
            <a href="">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>
                Email : demo@gmail.com
              </span>
            </a>
            <a href="">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                Phone Call : +01 123455678990
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <div className="custom_menu-btn">
            <button onclick="openNav()">
              <span className="s-1"> </span>
              <span className="s-2"> </span>
              <span className="s-3"> </span>
            </button>
          </div>
          <div id="myNav" className="overlay">
            <div className="menu_btn-style ">
              <button onclick="closeNav()">
                <span className="s-1"> </span>
                <span className="s-2"> </span>
                <span className="s-3"> </span>
              </button>
            </div>
            <div className="overlay-content">
              <a className="active" href="index.html"> Home <span className="sr-only">(current)</span></a>
              <a className="" href="about.html"> About</a>
              <a className="" href="why.html"> Why Us </a>
              <a className="" href="team.html"> Our Team</a>
              <a className="" href="testimonial.html"> Testimonial</a>
              <a className="" href="contact.html"> Contact Us</a>
            </div>
          </div>
          <a className="navbar-brand" href="index.html">
            <span>
              PrimeCare
            </span>
          </a>
          <div className="user_option">
            <a href="">
              <span>
                Login
              </span>
              <i className="fa fa-user" aria-hidden="true"></i>
            </a>
            <form className="form-inline">
              <button className="btn  nav_search-btn" type="submit">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </nav>
      </div>
    </header>
    <section className="slider_section position-relative">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
          <li data-target="#customCarousel1" data-slide-to="1"></li>
          <li data-target="#customCarousel1" data-slide-to="2"></li>
          <li data-target="#customCarousel1" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="box">
              <div className="baby_detail">
                <div className="baby_text">
                  <h2>
                    baby <br />
                    Care center
                  </h2>
                </div>
                <a href="">
                  Read More
                </a>
              </div>
              <div className="care_detail">
                <a href="">
                  Contact Us
                </a>
                <div className="care_text">
                  <h2>
                    We will take <br />
                    Care of <br />
                    your Baby
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="box">
              <div className="baby_detail">
                <div className="baby_text">
                  <h2>
                    baby <br />
                    Care center
                  </h2>
                </div>
                <a href="">
                  Read More
                </a>
              </div>
              <div className="care_detail">
                <a href="">
                  Contact Us
                </a>
                <div className="care_text">
                  <h2>
                    We will take <br />
                    Care of <br />
                    your Baby
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="box">
              <div className="baby_detail">
                <div className="baby_text">
                  <h2>
                    baby <br />
                    Care center
                  </h2>
                </div>
                <a href="">
                  Read More
                </a>
              </div>
              <div className="care_detail">
                <a href="">
                  Contact Us
                </a>
                <div className="care_text">
                  <h2>
                    We will take <br />
                    Care of <br />
                    your Baby
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="box">
              <div className="baby_detail">
                <div className="baby_text">
                  <h2>
                    baby <br />
                    Care center
                  </h2>
                </div>
                <a href="">
                  Read More
                </a>
              </div>
              <div className="care_detail">
                <a href="">
                  Contact Us
                </a>
                <div className="care_text">
                  <h2>
                    We will take <br />
                    Care of <br />
                    your Baby
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
    )
}