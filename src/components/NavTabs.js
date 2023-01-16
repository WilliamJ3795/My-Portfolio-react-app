import { ArrowRightIcon } from "@heroicons/react/solid";
import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
<header className="bg-gray-800 md:sticky top-0 z-10">
 <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <a className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl">
          <a href="#about"  onClick={() => handlePageChange('About')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
           className = {currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
            William James
            </a>
        </a>
    <nav className="nav nav-tabs md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <a href="#projects" className="mr-5 hover:text-white"
          onClick={() => handlePageChange('Projects')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
         {...currentPage === 'Projects' ? 'nav-link active' : 'nav-link'} 
        >
          Projects
        </a>
        <a
          href="#skills" className="mr-5 hover:text-white" {...currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
          onClick={() => handlePageChange('Skills')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          // className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
        >
          Skills
        </a>
        <a
          href="#testimonials" className="mr-5 hover:text-white"
          onClick={() => handlePageChange('Testimonials')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        {...currentPage === 'Testimonials' ? 'nav-link active' : 'nav-link'}
        >
          Testimonials
        </a>
        <a
          href="#contact" className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 mr-5 hover:text-white"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          {...currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </nav>
      </div>
      </header>
  );
}

export default NavTabs;