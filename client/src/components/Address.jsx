export default function Address(){
    return(
        <section className="info_section layout_padding2">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="info_contact">
                            <h5>Address</h5>
                            <div className="contact_link_box">
                                <a href="">
                                    <i
                                        className="fa fa-map-marker"
                                        aria-hidden="true"
                                    ></i>
                                    <span>Location</span>
                                </a>
                                <a href="">
                                    <i
                                        className="fa fa-phone"
                                        aria-hidden="true"
                                    ></i>
                                    <span>Call +01 1234567890</span>
                                </a>
                                <a href="">
                                    <i
                                        className="fa fa-envelope"
                                        aria-hidden="true"
                                    ></i>
                                    <span>demo@gmail.com</span>
                                </a>
                            </div>
                        </div>
                        <div className="info_social">
                            <a href="">
                                <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                ></i>
                            </a>
                            <a href="">
                                <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                ></i>
                            </a>
                            <a href="">
                                <i
                                    className="fa fa-linkedin"
                                    aria-hidden="true"
                                ></i>
                            </a>
                            <a href="">
                                <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="info_link_box">
                            <h5>Navigation</h5>
                            <div className="info_links">
                                <a className="active" href="index.html">
                                    {" "}
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                    ></i>{" "}
                                    Home{" "}
                                    <span className="sr-only">
                                        (current)
                                    </span>
                                </a>
                                <a className="" href="about.html">
                                    {" "}
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                    ></i>{" "}
                                    About
                                </a>
                                <a className="" href="why.html">
                                    {" "}
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                    ></i>{" "}
                                    Why Us{" "}
                                </a>
                                <a className="" href="team.html">
                                    {" "}
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                    ></i>{" "}
                                    Our Team
                                </a>
                                <a className="" href="testimonial.html">
                                    {" "}
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                    ></i>{" "}
                                    Testimonial
                                </a>
                                <a className="" href="contact.html">
                                    {" "}
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                    ></i>{" "}
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5>Newsletter</h5>
                        <form action="">
                            <input
                                type="text"
                                placeholder="Enter Your email"
                            />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}