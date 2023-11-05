export default function GetInTouch(){
    return(
        <section className="contact_section layout_padding-top">
        <div className="container">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <div className="contact-form">
                        <div className="heading_container">
                            <h2>Get In Touch</h2>
                        </div>
                        <form action="">
                            <input
                                type="text"
                                placeholder="Full name "
                            />
                            <div className="top_input">
                                <input
                                    type="email"
                                    placeholder="Email"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Message"
                                className="message_input"
                            />
                            <div className="btn-box">
                                <button>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}