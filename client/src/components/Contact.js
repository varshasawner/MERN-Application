import React from "react";

const Contact = () => {
    return (
        <>
            <div className="contact_info mt-5">
                <div className="container_fluid mb-5">
                    <div class="row row_row">
                        <div class="col-lg-2 offset-lg-3">
                            {/* for phone number */}
                            <div className="contact_info_item">
                                <i class="zmdi zmdi-phone-in-talk left icon_menu"></i>
                                <div className="contact_info_content right">
                                    <div className="contact_info_title">
                                        Phone
                                    </div>
                                    <div className="contact_info_text">
                                        +91 8789876899
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div className="contact_info_item">
                            <i class="zmdi zmdi-email left icon_menu"></i>
                                <div className="contact_info_content right">
                                    <div className="contact_info_title">
                                        Email
                                    </div>
                                    <div className="contact_info_text">
                                        abc@gmail.com
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div className="contact_info_item">
                            <i class="zmdi zmdi-gps-dot left icon_menu"></i>
                                <div className="contact_info_content right">
                                    <div className="contact_info_title">
                                        Address
                                    </div>
                                    <div className="contact_info_text">
                                        Atulya IT Park, Indore
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* get in touch */}
                <div className="contact_form mt-5 p-4">
                    <div className="container p-4">
                        <div className="row px-5">
                        <h3 className="mb-4">Get in Touch</h3>
                            <div className="col-md-4">
                                <input type="text" id="" placeholder="Your Name" className="form-control"/>
                            </div>
                            <div className="col-md-4">
                                <input type="email" id="" placeholder="Your Email" className="form-control"/>
                            </div>
                            <div className="col-md-4">
                                <input type="number" id="" placeholder="Your Phone Number" className="form-control"/>
                            </div>
                            <div className="col-md-12 mt-3">
                                <textarea id="" className="form-control" rows="8" placeholder="Type Message Here..."></textarea>
                            </div>
                            <div className="col-md-12 mt-3">
                                <input type="submit" id="" value="Send" className="form-control bg-primary text-white"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;