import React from 'react';
import { useState, useEffect } from 'react'
import HomePageSingleService from '../HomePageSingleService/HomePageSingleService'
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