import React from 'react';
import image5 from '../../Images/images-5.jpg'
import AboutFirstSection from '../AboutFirstSection/AboutFirstSection';
import AboutSecondSection from '../AboutSecondSection/AboutSecondSection';
import AboutThirdSection from '../AboutThirdSection/AboutThirdSection';
import './About.css'

const About = () => {
    return (
        <>
            <AboutFirstSection></AboutFirstSection>
            <AboutSecondSection></AboutSecondSection>
            <AboutThirdSection></AboutThirdSection>
        </>
    );
};

export default About;