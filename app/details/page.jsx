"use client";

import React, {useState} from "react"
import Link from "next/link"
import Image from "next/image"

import {FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaFigma } from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs, SiC, SiCplusplus} from "react-icons/si"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs" 
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import WorkSliderBtn from "@/components/WorkSliderBtn";


//about data
const about = {
  title: "About me",
  description: "I am interested in web development. I have been working on many projects to improve my skills.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tanawat La-ong"
    },
    {
      fieldName: "Nickname",
      fieldValue: "Pleum"
    },
    {
      fieldName: "University",
      fieldValue: "KMITL"
    },
    {
      fieldName: "Current year",
      fieldValue: "3 rd"
    },
    {
      fieldName: "Name",
      fieldValue: "Tanawat La-ong"
    },
    {
      fieldName: "Phone",
      fieldValue: "062-798-8998"
    },
    {
      fieldName: "Mail",
      fieldValue: "sir.tanawat@gmail.com"
    },
  ]
}

//skills data
const skills = {
  title: "My skills",
  description: "I am interested in web development. I have been working on many projects to improve my skills.",
  skillList: [
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <SiC />,
      name: "c",
    },
    {
      icon: <SiCplusplus />,
      name: "c++",
    },
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "css3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ]
}

//education data
const education = {
  title: "My education",
  description: "I am interested in web development. I have been working on many projects to improve my skills.",
  item: [
    {
      educationInstitution: "BJ Chanthaburi",
      class: "SMTE Program",
      duration: "2018 - 2021",
      GPAX: "GPX: 3.98"
    },
    {
      educationInstitution: "KMITL",
      class: "Computer Engineering",
      duration: "2022 - Present",
      GPAX: "GPX: 3.24"
    },
  ]
}

//porjects data
const projects = [
  {
    num: "01",
    category: "Frontend",
    projectName: "JoinHub",
    description: "Web board for finding members to join activities.",
    stack: [{ name: "Html 5"}, { name: "Css 3"}, { name: "Javascript"}],
    image: "/assets/project1.png",
    presentation: "https://www.canva.com/design/DAGIePygCVs/yoUScdPZ_UMb2r5ydIkiBw/edit?utm_content=DAGIePygCVs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    github: "https://github.com/kodpleum/JOINHUB",
  },
  {
    num: "02",
    category: "Frontend",
    projectName: "WokFood",
    description: "You can explore any food around the world from each continents and you can add favorites food to your list to export to CSV file.",
    stack: [{ name: "Next.js"}, { name: "Tailwind.css"}],
    image: "/assets/project2.png",
    presentation: "https://youtu.be/_j3UXmqQpj8?si=au3_T45wRDZ6qd57",
    github: "https://github.com/kodpleum/WokFood",
  },
  {
    num: "03",
    category: "Frontend",
    projectName: "Ingredish",
    description: "modern software development principles and practices, including the use of software processes in actual product development.",
    stack: [{ name: "Next.js"}, { name: "Tailwind.css"}],
    image: "/assets/project3.png",
    presentation: "https://www.canva.com/design/DAGVDts7y0Q/1X8gJGvnheDjkc396dYvHA/edit?utm_content=DAGVDts7y0Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    github: "https://github.com/A11-Softdev/ingredish-webapp",
  }
]

const Details = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    //get currrent slide index
    const currentIndex = swiper.activeIndex;
    //update project state base on current slide index
    setProject(projects[currentIndex]);
  }
 
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70px] w-full">
            {/* project */}
            <TabsContent value="projects" className="w-full">
              <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                  <div className="w-full xl:w-[40%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[20px]"> 
                      {/* outline num */}
                      <div className="text-8xl leading-none font-extrabold">
                      {project.num}
                      </div>
                      {/* project category */}
                      <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                      {project.projectName}
                      </h2>
                      {/* description */}
                      <p className="text-white/60">
                        {project.description}
                      </p>
                      {/* stacks */}
                      <ul className="flex gap-4">
                        {project.stack.map((item, index) => {
                          return(
                            <li key={index} className="text-xl text-accent">
                              {item.name}
                              {/* remove last comma */}
                              {index !== project.stack.length - 1 && ","}
                            </li>
                          )
                        })}
                      </ul>
                      {/* border */}
                      <div className="border border-white/20"></div>
                      {/* button */}
                      <div className="flex items-center gap-4">
                        {/* presentation btn */}
                        <Link href={project.presentation}>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                                <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                              </TooltipTrigger>
                              <TooltipContent>
                                Presentation
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                        {/* github btn */}
                        <Link href={project.github}>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                                <BsGithub className="text-white text-2xl group-hover:text-accent" />
                              </TooltipTrigger>
                              <TooltipContent>
                                Github
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full xl:w-[60%]">
                    <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                      {projects.map((project, index) => {
                        return <SwiperSlide key={index} className="w-full">
                          <div className="h-[460px] relative group flex justify-center items-center bg-white">
                            {/* overlay */}
                            <div className="absolute top-0 w-full h-full bg-black/10 z-10"></div>
                            {/* image */}
                            <div className="w-full h-full">
                              <Image src={project.image} fill className="object-cover" alt=""/>
                            </div>
                          </div>
                          </SwiperSlide>
                      })}
                      {/* slider btn */}
                      <WorkSliderBtn containerStyles="flex gap-2 absolute left-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                    </Swiper>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-accent">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-accent">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.item.map((item, index) => {
                      return(
                        <li key={index} className="bg-[#232329] h-[204px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span>{item.duration}</span>
                          <h3 className="text-xl text-accent max-w-[260px] text-center lg:text-left">{item.educationInstitution}</h3>
                          <h4 className="min-h-[60px]">{item.GPAX}</h4>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.class}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-accent">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return( 
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Details