import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'RobinGoodFoods',
      description: 'React/JavaScript/MERN Stack',
      link: "https://immense-woodland-28981.herokuapp.com/",
      repo: "https://github.com/Everyone1138/RobinGoodFoods"
    },
    {
      name: 'Gameathon',
      description: 'Rest Stack',
      link: "https://gameathon13.herokuapp.com/",
      repo: "https://github.com/Everyone1138/Gameathon/tree/main"
    },
    {
      name: 'letskeeptrack',
      description: 'MySQL',
      link: "https://github.com",
      repo: "https://github.com"
    },
    // {
    //   name: 'led-wall',
    //   description: 'Node/IoT',
    //   link: "https://github.com",
    //   repo: "https://github.com"
    // },
    // {
    //   name: 'calculator',
    //   description: 'React/JavaScript/CSS',
    //   link: "https://github.com",
    //   repo: "https://github.com"
    // },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
