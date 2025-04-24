import React from 'react'

function ProjectCard({title, text, image, link, tags}) {
return (
    <a href={link} className='project-card' target="_blank" rel="noopener noreferrer">
        <div className="project-card-image">
            
        </div>
        <div className="project-card-content">
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="project-card-tags">
                {tags.map((tag, index) => (
                    <div key={index} className="project-card-tag">
                        {`</${tag}>`}
                    </div>
                ))}
            </div>
        </div>
    </a>
)
}

export default ProjectCard