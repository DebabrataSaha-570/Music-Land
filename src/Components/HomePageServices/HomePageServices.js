import React from 'react';
import './HomePageServices.css'
import { useState, useEffect } from 'react'
import HomePageSingleService from '../HomePageSingleService/HomePageSingleService';
import { useHistory } from 'react-router';
const HomePageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./servicesFakeData.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services)
    let history = useHistory()
    const handleViewAll = () => {
        history.push('/allservices')
    }
    return (
        <>
            <section className="container my-5">

                <div className="text-center w-50 mx-auto">
                    <h4>Our Services {services.length}</h4>
                    <h2>Most popular classes</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis sint illum nostrum magni nulla laborum assumenda vitae perferendis recusandae labore.</p>
                </div>

                {/* card  */}
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.slice(0, 3).map(service => <HomePageSingleService service={service} key={service.id}></HomePageSingleService>)
                    }



                </div>

                <div className="text-center">
                    <button onClick={handleViewAll} className='music-btn-one mt-3'>VIEW ALL</button>
                </div>

            </section>
        </>
    );
};

export default HomePageServices;