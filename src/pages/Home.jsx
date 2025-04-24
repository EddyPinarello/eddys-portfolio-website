import React from 'react';
import HomeCard from '../components/HomeCard';


function Home() {
    return (
        <section className="home-section">
            <div className="home-presentation">
                <div className="circle"></div>
                <div className="text-area">
                    <h2>Hi, I'm Eddy Pinarello</h2>
                    <p>Software engineer enthusiast</p>
                    <p>Learn more about me in:</p>
                    <a href="/about" className="about-link">About section →</a>
                </div>
            </div>
            <div className="home-cards">
            <a href='/projects' className='home-cards-title'>Project section →</a>

            <HomeCard 
                title="Webapp" 
                text="Some of the stuff I've built recently." 
                link="/projects" 
                image="/assets/github-icon.png" 
                reverse={false}
            />
            <HomeCard 
                title="webapp" 
                text="Here's what I've done so far in the industry." 
                link="/work-experience" 
                image="/assets/linkedin-icon.png" 
                reverse={true}
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
