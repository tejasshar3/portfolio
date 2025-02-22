import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in Electronics & Telecommunication"
            subTitle="MIT Academy of Engineering, Pune (2019 - 2023)"
            result="7.7/10"
            des="Completed graduation in Electronics and Telecommunication field with the major in Entrereneurship (Under EDF MITAOE with A+ grade)."
          />
          <ResumeCard
            title="HSSC - General Science"
            subTitle="Kamla Neharu Mahavidhyalaya (2016 - 2018)"
            result="72.40/100"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Siddheshwar High School (2005 - 2016)"
            result="92.60/100"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Data Analyst Intern"
            subTitle="Krishigati - (Jan 2023 - July 2023)"
            result="PUNE, INDIA"
            des="An Agri-tech startup, known for its EV product ‘Electric Bull’. 
            • Created dashboards from business data to understand business situations and make decision based on it.
            • Skills: Power BI, Excel"
          />
          <ResumeCard
            title="Management Head"
            subTitle="CourseKhoj - (Dec 2021 -Present)"
            result="PUNE, INDIA"
            des="An Ed-tech startup, lists, compare and promote courses in various domains.
            • Leading the team for content for website, blog, posts. Posters and thumbnail design for blogs and posts.
            • Increased customer engagement by 300% by adding valuable engaging conte"
          />
          
          <ResumeCard
            title="Business Development and Sales Associate"
            subTitle="Metvy Learn - (Jan 2022 ‑ April 2022)"
            result="BANGALORE, INDIA"
            des="An Ed-tech startup backed by IIM Bangalore provides mentorship and a cohort ecosystem.
            • Increased sales by completing 100% target by connecting with leads and converting them.
            • Soft Skills: Cold Calling, Negotiation, Customer acquisition, Selling, lead generation."
          /> 

          <ResumeCard
            title="Campus Ambassador Intern"
            subTitle="Ambassador Intern Mumbai, India - (July 2021 ‑ Feb 2022)"
            result="MUMBAI, INDIA"
            des="Promoted entrepreneurship by organizing guest lectures and event in the Pune region.
            • Soft Skills: Presentation skills, Communication."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education