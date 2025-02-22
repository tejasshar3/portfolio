import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Winner Virtual Stock market Competition"
            subTitle="Esummit’22 at E-cell IIT Bombay."
            result="Rank #1"
            des="Rank #1 in Virtual Stock market Competition, At Esummit’22 at E-cell IIT Bombay"
          />
          <ResumeCard
            title="Winner Business Model Competition"
            subTitle="MITAOE, Pune."
            result="Rank #1"
            des="Rank #1 in Business Model Competition at MITAOE, Pune."
          />
          <ResumeCard
            title="District level Essay Writing Competition."
            subTitle="Gov. Medical College, Nagpur."
            result="Rank #1"
            des="Rank #1 in District level Essay Writing Competition by Gov. Medical College, Nagpur."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Position of Responsibility</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="President, E-Cell MIT AOE"
            subTitle="June 2022 ‑ June 2023"
            result="Success"
            des="Leading team of 45+ members.
            • Soft Skills: Entrepreneurship, Time Management, Communication, Presentation skills."
          />
          <ResumeCard
            title="Team Member, ROBOCON MIT AOE"
            subTitle="June 2020 ‑ April 2022"
            result="Success"
            des="Skills: Robotics, IoT."
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
