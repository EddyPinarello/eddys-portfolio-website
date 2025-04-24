import React from 'react';
import HomeCard from '../components/HomeCard';
import corsaIdealeHome from '../assets/corsaIdeale/corsaIdealeHome.webp'
import sensorManagement from '../assets/sensorManagement/sensorManagementHome.webp'

function Home() {
    return (
        <section className="home-section">
            <div className="home-presentation">
                <div className="circle"></div>
                <div className="text-area">
                    <h1>Hi, I'm Eddy Pinarello</h1>
                    <p>Software engineer enthusiast</p>
                    <p>Learn more about me in:</p>
                    <a href="/about" className="about-link">About section →</a>
                </div>
            </div>
            <div className="home-cards">
            <a href='/projects' className='home-cards-title'>Project section →</a>

            <HomeCard 
                title="CorsaIdeale webapp" 
                text="This project was developed for the Web Technologies course at the University of
                    Padua, Academic Year 2024-2025."
                link="/projects" 
                image={corsaIdealeHome} 
                reverse={false}
            />
            <HomeCard 
                title="Sensor Management Desktop App" 
                text="This is a Qt-based desktop application that functions as a CRUD (Create, Read, Update, Delete)
                    system for managing various sensors." 
                link="/projects" 
                image={sensorManagement}
                reverse={false}
            />   
            <a href='/work-experience' className='home-cards-title'>Work exp section →</a>

            <HomeCard 
                title="swe" 
                text="Here's what I've done so far in the industry." 
                link="/work-experience" 
                image="/assets/linkedin-icon.png" 
                reverse={true}
            />           
            </div>
      </section>
    );
  }
  
  

export default Home;
