import React from 'react';
import './HomePageSingleService.css'

const HomePageSingleService = (props) => {
    const { services, img, duration, price } = props.service
    return (
        <div class="col">
            <div class="card my-3 shadow-lg">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body ml-service-card">
                    <h5 class="card-title"><span className="ml-service-span-one">{services}</span> Classes</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div >
                            <h6> <i class="fas fa-calendar-alt"></i> {duration}</h6>
                            <h6><i class="far fa-money-bill-alt"></i> from ${price}</h6>
                        </div>
                        <div >
                            <button className="music-btn-two">More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageSingleService;