import React from 'react';
import './AboutThirdSectionImages.css'

const AboutThirdSectionImages = (props) => {
    const { name, img, profession } = props.teacher
    return (
        <div class="col my-5">
            <div class="card text-center shadow-lg">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body ml-about-thridSection-images">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{profession}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutThirdSectionImages;