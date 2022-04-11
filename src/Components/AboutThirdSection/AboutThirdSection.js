import React, { useEffect, useState } from 'react';
import AboutThirdSectionImages from '../AboutThirdSectionImages/AboutThirdSectionImages';
import './AboutThirdSection.css'
const AboutThirdSection = () => {
    const [teachers, setTeachers] = useState([])
    useEffect(() => {
        fetch('./whoWeAreFakeData.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    console.log(teachers)
    return (
        <>
            <section className="container ml-about-third-section">
                <h2 className="text-center">Who we are</h2>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        teachers.map(teacher => <AboutThirdSectionImages teacher={teacher} key={teacher.name}></AboutThirdSectionImages>)
                    }
                </div>
            </section>
        </>
    );
};

export default AboutThirdSection;