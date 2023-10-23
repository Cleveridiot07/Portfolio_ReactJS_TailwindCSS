import React from "react";
import portfolioimage from "./portfolio.png";
import codeeditor from "./code editor.png";
import projectt from "./projectst.png";

const Projects = () => {
  return (
    <section id="projects" className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Projects
          </h2>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* Projects Card - Starter */}

          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <img src={portfolioimage} alt="" />
            <div className="flex items-baseline justify-center my-8">
              <span className="mr-2 text-5xl font-extrabold">Portfolio</span>
            </div>
            <p></p>
            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              {/* ... (Repeat for other list items) */}
            </ul>
            <a
              href="https://portfolio-react-js-tailwind-css.vercel.app/"
              className="text-white bg-cyan-800 hover:bg-blue-900 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-purple-900"
            >
              URL
            </a>
            <a
              href="https://github.com/Cleveridiot07/Portfolio_ReactJS_TailwindCSS"
              className="text-white mt-10 bg-cyan-800 hover:bg-blue-900 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-purple-900"
            >
              Github Link
            </a>
          </div>

          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <img src={codeeditor} alt="" />
            <div className="flex items-baseline justify-center my-8">
              <span className="mr-2 text-5xl font-extrabold">Code Editor</span>
            </div>
            <p></p>
            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              {/* ... (Repeat for other list items) */}
            </ul>
            <a
              href="https://c-iscripter.vercel.app/"
              className="text-white bg-cyan-800 hover:bg-blue-900 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-purple-900"
            >
              URL
            </a>
            <a
              href="https://github.com/Cleveridiot07/CIscripter"
              className="text-white mt-10 bg-cyan-800 hover:bg-blue-900 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-purple-900"
            >
              Github Link
            </a>
          </div>
          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <img src={projectt} alt="" />
            <div className="flex items-baseline justify-center my-8">
              <span className="mr-2 text-gray-500 text-5xl font-extrabold">
                To be added
              </span>
            </div>
            <p></p>
            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              {/* ... (Repeat for other list items) */}
            </ul>
            <a
              href="#"
              className="text-white bg-cyan-900 hover:bg-blue-900 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-purple-900"
            >
              URL
            </a>
            <a
              href="#"
              className="text-white mt-10 bg-cyan-9m,.m00 hover:bg-blue-900 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-purple-900"
            >
              Github Link
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
