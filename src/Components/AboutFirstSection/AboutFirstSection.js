import React from 'react';
import image5 from '../../Images/images-5.jpg'
import './AboutFirstSection.css'

const AboutFirstSection = () => {
    return (
        <section className='container my-5'>
            <div className="d-flex align-items-center justify-content-around">
                <div className="w-50 ml-about-first-section">
                    <h1>OverView</h1>

                    <h3>Lorem ipsum dolor sit</h3>
                    <div className="w-75">
                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, ipsam commodi. Minus veritatis delectus error ipsum itaque quasi est placeat.</p>
                    </div>
                </div>
                <div className="w-50">
                    <img className="img-fluid" src={image5} alt="" />
                </div>
            </div>
        </section>
    );
};

export default AboutFirstSection;