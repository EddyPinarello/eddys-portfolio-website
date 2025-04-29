import React from 'react';
import Timeline from '../components/Timeline';

const workExperienceData = [
    {
      role: "Software Engineer",
      company: "Google",
      description: "Worked on the new user dashboard.",
      tags: ["React", "TypeScript"],
      dateRange: "10/2022 to current"
    },
    {
      role: "Software Engineer",
      company: "Google",
      description: "Worked on improving search algorithms.",
      tags: ["React", "TypeScript","CAAAAAAAAAAAA"],
      dateRange: "09/2020 to 09/2022"
    }
  ];

function Workexp() {
  return (
    <div className="workexp-section">
      <Timeline items={workExperienceData} />
    </div>
  );
}

export default Workexp;
