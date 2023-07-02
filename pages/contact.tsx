import Head from "next/head";
import Link from "next/link";
import { Menu } from "@headlessui/react";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact" />
      </Head>
      <main>
        <div className="dark:bg-gray-900">
          <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
              <ul className="items-center hidden space-x-8 lg:flex">
                <li>
                  <Link
                    className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400 dark:text-gray-100 text-gray-900"
                    href="#">
                    <span>Produits</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400 dark:text-gray-100 text-gray-900"
                    href="/contact">
                    <span>Contact</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400 dark:text-gray-100 text-gray-900"
                    href="#">
                    <span>Prix</span>
                  </Link>
                </li>
              </ul>
              <Link className="inline-flex items-center lg:mx-auto" href="#">
                <span className="ml-2 text-xl font-bold tracking-wide uppercase dark:text-gray-100 text-gray-900">
                  Hermescode
                </span>
              </Link>
              <ul className="items-center hidden ml-auto space-x-8 lg:flex">
                <li>
                  <span></span>
                </li>
                <li>
                  <span></span>
                </li>
              </ul>
              <Menu as="div" className="relative flex justify-end lg:hidden">
                <Menu.Button className="inline-flex justify-center rounded-md px-4 py-2 text-sm font-medium dark:text-white hover:bg-opacity-30">
                  <span className="w-fit">
                    <svg
                      className="w-5 text-gray-600"
                      className="w-5 text-gray-600"
                      viewBox="0 0 24 24">
                      
                      <path
                        fill="currentColor"
                        d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                      <path
                        fill="currentColor"
                        d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
                      <path
                        fill="currentColor"
                        d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"></path>
                    </svg>
                  </span>
                </Menu.Button>
                <Menu.Items
                  as="ul"
                  className="absolute right-0 text-gray-900 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg mt-10">
                  <Menu.Item
                    as="li"
                    className="group flex rounded-md items-center w-full px-2 py-2 text-sm">
                    <span>Menu Item 1</span>
                  </Menu.Item>
                  <Menu.Item
                    as="li"
                    className="group flex rounded-md items-center w-full px-2 py-2 text-sm">
                    <span>Menu Item 2</span>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          </div>
        </div>
        <section></section>
        <div className="py-9">
          <section className="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md dark:bg-transparent xl:rounded-global">
            <h2 className="text-3xl font-bold text-center">Nous contacter</h2>
            <p className="mt-3 text-center text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
              <Link
                className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
                href="#">
                <span className="w-fit">
                  <svg
                    className="w-5 h-5"
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="mt-2">
                  <p>121 Street, NY</p>
                </span>
              </Link>
              <Link
                className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
                href="#">
                <span className="w-fit">
                  <svg
                    className="w-5 h-5"
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <span className="mt-2">
                  <p>+2499999666600</p>
                </span>
              </Link>
              <Link
                className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
                href="#">
                <span className="w-fit">
                  <svg
                    className="w-5 h-5"
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
                <span className="mt-2">
                  <p>example@example.com</p>
                </span>
              </Link>
            </div>
            <div className="mt-6">
              <div className="items-center -mx-2 md:flex">
                <div className="w-full mx-2">
                  <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                    <p>Name</p>
                  </label>
                  <input className="block px-4 py-2 text-gray-700 bg-white border rounded-global w-full focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300" />
                </div>
                <div className="w-full mx-2 mt-4 box-border md:mt-0">
                  <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                    <p>E-mail</p>
                  </label>
                  <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-global focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300" />
                </div>
              </div>
              <div className="w-full mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  <p>Message</p>
                </label>
                <textarea className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-global border-gray-200 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300"></textarea>
              </div>
              <div className="flex justify-center mt-6">
                <button className="px-4 py-2 text-white transition-colors duration-200 transform rounded-global focus:outline-none focus:bg-gray-600 bg-primary">
                  <p>Send Message</p>
                </button>
              </div>
            </div>
          </section>
        </div>
        <footer className="py-5 pb-0">
          <div className="max-w-7xl mx-auto flex flex-col gap-y-8 py-5 px-5 sm:flex-row sm:justify-around sm:px-0 lg:gap-x-10">
            <div className="sm:basis-1/5">
              <h1 className="font-black text-3xl text-slate-900 dark:text-slate-100">
                HermesCode
              </h1>
              <p className="text-base tracking-normal text-slate-700 mt-3 dark:text-gray-300 2xl:tracking-wide">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                Services
              </h4>
              <Link className="block mt-3 text-sm dark:text-gray-300" href="#">
                <span>Chai </span>
              </Link>
              <Link className="block mt-3 text-sm dark:text-gray-300" href="#">
                <span>Generator</span>
              </Link>
            </div>
            <div>
              <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                Links
              </h4>
              <Link className="block mt-3 text-sm dark:text-gray-300" href="#">
                <span>Politiques de confidentialitées</span>
              </Link>
              <Link className="block mt-3 text-sm dark:text-gray-300" href="#">
                <span>Terms et conditions</span>
              </Link>
              <Link className="block mt-3 text-sm dark:text-gray-300" href="#">
                <span>Mentions légales</span>
              </Link>
            </div>
            <div>
              <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                Social 
              </h4>
              <Link className="block mt-3 text-sm dark:text-gray-300" href="#">
                <span>Twitter</span>
              </Link>
              <Link className="block mt-3 text-sm dark:text-gray-300" href="#">
                <span>Facebook</span>
              </Link>
              <Link className="block mt-3 text-sm dark:text-gray-300" href="#">
                <span>Instagram</span>
              </Link>
              <Link className="block mt-3 text-sm dark:text-gray-300" href="#">
                <span>Phone et Email</span>
              </Link>
            </div>
          </div>
          <div>
            <p className="pb-5 pt-5 text-xs text-gray-400 border-t max-w-7xl mx-auto px-5 sm:px-8">
              Copyright @ 2023, HermesCode.com
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
