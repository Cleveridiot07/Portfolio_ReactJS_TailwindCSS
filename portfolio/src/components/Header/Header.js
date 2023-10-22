import React from "react";
import logo from "./heador.png";

const Header = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Hi there! <br /> I'm <br /> Nikhil Saxena
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            I am a frontend developer with a growing expertise in the MERN
            stack, I'm deeply passionate about creating beautiful and functional
            web applications. Additionally, I'm actively learning and expanding
            my skills, always up for a coding challenge and eager to stay
            competitive in the world of programming. Let's connect and explore
            exciting opportunities together! 🚀🚀
          </p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="https://github.com/Cleveridiot07"
              target="_blank"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-600  focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-black dark:focus:ring-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9 mr-2 text-gray-500 dark:text-gray-400 bg-slate-300 rounded-full"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="github"
              >
                <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nikhilsaxena9987/"
              target="_blank"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-600  focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-cyan-800 dark:focus:ring-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9 mr-2 text-gray-500 dark:text-gray-400 bg-slate-300 rounded-md p-1"
                viewBox="0 0 28.87 28.87"
                id="linkedin"
              >
                <g data-name="Layer 2">
                  <g data-name="Layer 1">
                    <rect
                      width="28.87"
                      height="28.87"
                      fill="#0b86ca"
                      rx="6.48"
                      ry="6.48"
                    ></rect>
                    <path
                      fill="#fff"
                      d="M8 12h3v9.68H8zm1.53-4.81a1.74 1.74 0 11-1.74 1.75 1.74 1.74 0 011.74-1.75M12.92 12h2.89v1.32a3.16 3.16 0 012.85-1.56c3 0 3.61 2 3.61 4.61v5.31h-3V17c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z"
                    ></path>
                  </g>
                </g>
              </svg>
              LinkedIN
            </a>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={logo} alt="hero image" />
        </div>
      </div>
    </section>
  );
};

export default Header;
