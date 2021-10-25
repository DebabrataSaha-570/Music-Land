import React from 'react';
import './ContactUs.css'
const ContactUs = () => {
    return (
        <>
            <section>

                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Opening Hours </h3>
                            <p className="my-3">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit vel impedit quo, blanditiis cumque quam modi alias debitis voluptatem ratione.
                            </p>
                            <div className="my-5">
                                <p>
                                    <i class="fas fa-map-marker-alt ml-icons-contact" ></i>
                                    221B Bekar Rasta, Noakhali, Bangladesh
                                </p>
                                <p>
                                    <i class="fas fa-map-marker-alt ml-icons-contact" ></i>
                                    221B Bekar Rasta, Noakhali, Bangladesh
                                </p>
                                <p>
                                    <i class="fas fa-map-marker-alt ml-icons-contact" ></i>
                                    221B Bekar Rasta, Noakhali, Bangladesh
                                </p>
                            </div>
                            <div className="ml-contact-social">
                                <h4>Social: </h4>
                                <i class="fab fa-facebook  fa-2x ml-social-facebook" ></i>
                                <i class="fab fa-twitter fa-2x ml-social-twitter"></i>
                                <i class="fab fa-youtube fa-2x ml-social-youtube"></i>
                                <i class="fab fa-instagram-square fa-2x ml-social-instagram"></i>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form action="" className="ml-from p-5">
                                <div className="mt-3">
                                    <small>Your Name*:</small>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mt-3">
                                    <small>Your Email*:</small>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mt-3">
                                    <small>Your Message*:</small>
                                    <textarea class="form-control" rows="3"></textarea>
                                </div>
                                <div className="text-center mt-4 ">
                                    <button className="music-btn-one">Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default ContactUs;