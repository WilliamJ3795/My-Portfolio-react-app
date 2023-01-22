import React from 'react';
import { BsFillLaptopFill } from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";

export default function About() {
  return (
    <section id="about">
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start 
                       md:text-left mb-16 md:mb-0 items-center text-center">

        <BsFillLaptopFill className="object-cover h-48 w-96" />
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
          Hi! My name is William,
          <br className="hidden lg:inline-block" /> I love web development!
        </h1>
        <p className="mb-8 leading-relaxed">
         My fascination with tech dates back to when I was just a child, 
         but it wasn't until 2022 where I decided to begin my journey into full stack web development.
         Feel free to navigate my portfolio!  

        </p>
        {/* <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
            Work With Me
          </a>
          <Link to="Projects"
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
            See My Past Work
          </Link>
        </div> */}
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src=
          "./coding.svg"
        />
      </div>
    </div>
    
    {/* <footer className="bg-yellow-700 md:sticky top-0 z-10 "> */}
    <footer className=" px-8 py-8 bg-yellow-400 md:sticky top-0 z-10 ">
      <div className='flex m-auto w-28
       justify-between'>
        
       <a href='https://www.linkedin.com/in/william-james-b25633101/'>
          <BsLinkedin className="object-cover h-6 w-6 hover:text-white"/>
       </a>
       {/* </div>

       <div className='px-8 py-8 w-5 display: grid; grid-gap: 1rem; '> */}
       <a href='https://github.com/WilliamJ3795'>
       <BsGithub className="object-cover h-6 w-6 mr-5 hover:text-white"/>
       </a>
       </div>
    

       </footer>
      
      </section>

);
}