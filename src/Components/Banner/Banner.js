import React from 'react';
import './Banner.css'
import img1 from '../../Images/image-1.jpg'
import img2 from '../../Images/image-2.jpg'
import img3 from '../../Images/image-3.jpg'
import img4 from '../../Images/image-4.jpg'

const Banner = () => {
    return (
        <div id="carouselExampleInterval" class="carousel slide music-land-carousel" data-bs-ride="carousel">
            <div class="carousel-inner h-25 d-inline-block">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src={img2} class="d-block w-100" alt="..." />
                    {/* <img src='https://i.ibb.co/7204Qv7/image-2.jpg' class="d-block w-100" alt="..." /> */}
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src={img1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={img3} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;