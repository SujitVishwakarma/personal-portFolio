import React from 'react'
import ResumeCards from "./ResumeCards";

const Experience = () => {
  return (
    <div
    
      className=" py-6 lgl:py-12 flex flex-col lgl:flex-row w-full gap-10 lgl:gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2023</p>
          <h2 className=" text-2xl lgl:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCards
            title="Campus Ambasadar at Viral-Fission"
            subTitle="Digital Marketing - (2022 - Present)"
            result="USA"
            des="Viral-Fissions hiring process is an important part of our culture. Fissions care deeply about their teams and the people who make them up."
          />
          <ResumeCards
            title="Web Developer & Trainer"
            subTitle="Angela Yu - (2023 - present)"
            result="America"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCards
            title="Front-end Developer"
            subTitle="Walking pal - (2023 - present)"
            result="Oman"
            des="The walking pal is the community, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCards
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCards
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCards
            title="Electronics Lead"
            subTitle="Robotics Society (2021 - present)"
            result="NEVADA"
            des="Robotics Society in VSSUT education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </div>
  )
}

export default Experience
