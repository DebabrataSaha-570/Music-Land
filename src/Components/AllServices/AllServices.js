import React from 'react';
import { useState, useEffect } from 'react'
import HomePageSingleService from '../HomePageSingleService/HomePageSingleService'
import './AllServices.css'
const AllServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./servicesFakeData.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <section className="container">
                <div className="text-center my-4">
                    <h1 className="ml-allServices-heading">All Services</h1>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <HomePageSingleService service={service} key={service.id}></HomePageSingleService>)
                    }



                </div>
            </section>

        </>
    );
};

export default AllServices;