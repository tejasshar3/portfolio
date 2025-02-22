import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour,
  projectFive,
  projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects & Activities"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard    
          title="CourseKhoj.com"
          des=" An Ed-tech startup, lists, compare and promote courses in various domains. 
          • Soft Skills: Project Management, Team Management, Project Planning, sales, marketing."
          src={projectOne}
        />
        <ProjectsCard
          title="UdyogFactory"
          des=" Build a platform to innovate the process of starting, running, and growing small businesses.
          • Technical Skills: MongoDB, ReactJS, NodeJS, ExpressJS, Frontend, Backend, excel."

          src={projectTwo}
        />
        <ProjectsCard
          title="Lightning Photography"
          des=" Build an application that solves the problem of capturing lightning images through an android.
• Technical Skills: MATLAB, Simulink, Parallel Processing, Android support package."
          src={projectThree}
        />
        <ProjectsCard
          title="Cataract Detection"
          des=" Build an application that detect the cataract in the eyes of patient using image processing in MatLab • Technical Skills: MatLab, Parallel Processing, Image processing "
          src={projectFour}
        />
        <ProjectsCard
          title="E-Cell"
          des=" As E Cell President, I led aspiring entrepreneurs, organized workshops, lectures, and networking events, fostering teamwork and entrepreneurial success!"
          src={projectFive}
        />
        <ProjectsCard
          title="Robotics Club"
          des=" As a Robotics Club member, I collaborated on projects, organized events, and developed teamwork skills, fostering innovation and technological advancements!"
          src={projectSix }
        />
      </div>
    </section>
  );
}

export default Projects