import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFacebook, faTwitter } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className="d-flex align-items-center" >


                <section className='container'>
                    <div className="row">
                        <div className="col-md-3">
                            <h3 className="mt-5 mb-3 ml-heading">Music-Land</h3>
                            <small className="ml-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quae ipsum laborum, obcaecati dolore illum nemo iste repellendus ut nihil?</small>
                            {/* <FontAwesomeIcon icon={faCoffee} size="lg" color="blue" />
                        <FontAwesomeIcon icon={faFacebook} size="lg" color="blue" /> */}
                            <div className="ml-icons-social my-3">
                                <i class="fab fa-facebook  fa-2x" ></i>
                                <i class="fab fa-twitter fa-2x"></i>
                                <i class="fab fa-youtube fa-2x"></i>
                                <i class="fab fa-instagram-square fa-2x"></i>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3 className="mt-5 mb-3 ml-heading">Contact Us</h3>
                            <p>
                                <i class="fas fa-map-marker-alt ml-icons-contact" ></i>
                                <small className="mx-2 ml-small">221B Bekar Rasta, Noakhali, Bangladesh</small>
                            </p>
                            <p>
                                <i class="fas fa-phone-alt ml-icons-contact"></i>
                                <small className="mx-2 ml-small">0173829834984</small>
                            </p>
                            <p>
                                <i class="fas fa-envelope ml-icons-contact"></i>
                                <small className="mx-2 ml-small">admin@gmail.com</small>
                            </p>

                        </div>
                        <div className="col-md-5">
                            <h3 className="mt-5 mb-3 ml-heading">Instagram</h3>
                            <small className='ml-small'>Instagram did not return a 200.</small>
                        </div>
                    </div>

                </section>
            </footer>

        </>
    );
};

export default Footer;