import { ArrowRightIcon } from "@heroicons/react/solid";
import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
<header className="bg-yellow-500 md:sticky top-0 z-10">
 <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <a className="title-font font-medium mr-5 hover:text-white mb-4 md:mb-0 ml-3: text-xl">
          <a href="#about"  onClick={() => handlePageChange('About')}
           className = {currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
            William James
            </a>
        </a>
    <nav className="nav nav-tabs md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	
        flex flex-wrap items-center text-base justify-center">
        <a href="#projects" className="mr-5 hover:text-white"
          onClick={() => handlePageChange('Projects')}
         {...currentPage === 'Projects' ? 'nav-link active' : 'nav-link'} 
        >
          Projects
        </a>
        <a
          href="#skills" className="mr-5 hover:text-white" {...currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
          onClick={() => handlePageChange('Skills')}
        >
          Skills
        </a>
        {/* <a
          href="#testimonials" className="mr-5 hover:text-white"
          onClick={() => handlePageChange('Testimonials')}
        {...currentPage === 'Testimonials' ? 'nav-link active' : 'nav-link'}
        >
          Testimonials
        </a>
        <a
          href="#contact" className=" py-2 mr-5 hover:text-white"
          onClick={() => handlePageChange('Contact')}
        {...currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me <ArrowRightIcon className="w-4 h-4 ml-2" />
        </a> */}
      </nav>
      </div>
      </header>
  );
}

export default NavTabs;