import React from 'react';
import concert1 from '../../Images/concert-1.jpg'
import concert2 from '../../Images/concert-2.jpg'
import concert3 from '../../Images/concert-3.jpg'
import './AboutSecondSection.css'

const AboutSecondSection = () => {
    return (
        <>
            <section className="about-second-section ml-about-second-section">
                <section className="container " >
                    <article className="my-5 pt-5">
                        <div className="row ml-about-us-second-section">
                            <div className="col-md-4 ">
                                <img className='img-fluid ml-about-us-second-image' src={concert1} alt="" />
                            </div>
                            <div className="col-md-8 ">
                                <div className="w-75 mx-auto">
                                    <h1>December 1995</h1>

                                    <h3>We Founded the Melody Music School After Gathering A Team of Professional Music Teachers</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a quo fuga praesentium debitis perferendis fugiat necessitatibus, nobis, sapiente rerum numquam quos iure iste obcaecati vitae eaque non voluptatibus quidem.</p>
                                </div>
                            </div>
                        </div>

                    </article>

                    <article className="mb-5 pt-5">
                        <div className="row ml-about-us-second-section">
                            <div className="col-md-4">
                                <img className='img-fluid ml-about-us-second-image' src={concert2} alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="w-75 mx-auto">
                                    <h1>
                                        March 2004</h1>

                                    <h3>Introduction of a New Course: DJ and Beatmaking; Organizing First Public Events</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a quo fuga praesentium debitis perferendis fugiat necessitatibus, nobis, sapiente rerum numquam quos iure iste obcaecati vitae eaque non voluptatibus quidem.</p>
                                </div>
                            </div>
                        </div>

                    </article>
                    <article className="mb-5 py-5">
                        <div className="row ml-about-us-second-section">
                            <div className="col-md-4">
                                <img className='img-fluid ml-about-us-second-image' src={concert3} alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="w-75 mx-auto">
                                    <h1>May 2018</h1>

                                    <h3>Introducing More Courses for Children and Adults and Offering Free Masterclasses</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a quo fuga praesentium debitis perferendis fugiat necessitatibus, nobis, sapiente rerum numquam quos iure iste obcaecati vitae eaque non voluptatibus quidem.</p>
                                </div>
                            </div>
                        </div>

                    </article>
                </section>
            </section>

        </>
    );
};

export default AboutSecondSection;