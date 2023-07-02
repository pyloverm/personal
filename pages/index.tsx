import Head from "next/head";
import Link from "next/link";
import { Menu } from "@headlessui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Head>
      <main>
        <div className="dark:bg-gray-900 2xl:bg-primary-400">
          <div className="px-4 py-5 mx-auto bg-primary-400 md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div className="text-white relative flex grid items-center grid-cols-2 lg:grid-cols-3">
              <ul className="items-center hidden space-x-8 lg:flex">
                <li>
                  <Link
                    className="font-medium tracking-wide transition-colors duration-200 dark:text-gray-100 text-gray-900 hover:text-gray-200 lg:text-white"
                    href="#">
                    <span>Product</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium tracking-wide transition-colors duration-200 dark:text-gray-100 text-gray-900 hover:text-gray-200 lg:text-white"
                    href="#">
                    <span>Features</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium tracking-wide transition-colors duration-200 dark:text-gray-100 text-gray-900 hover:text-gray-200 lg:text-white"
                    href="#prix">
                    <span>Pricing</span>
                  </Link>
                </li>
              </ul>
              <Link className="inline-flex items-center lg:mx-auto" href="#">
                <span className="ml-2 text-xl font-bold tracking-wide uppercase dark:text-gray-100 text-white">
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
                      className="w-5 text-white"
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
        <section>
          <div className="container px-6 py-16 mx-auto text-center">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-4xl font-bold text-gray-800 tracking-tight dark:text-white lg:text-5xl">
                Découvrez le pouvoir de notre expertise en développement web !
              </h1>
              <p className="mt-6 text-gray-500 dark:text-gray-300">
                Construisez des sites performants, sécurisés et optimisés pour
                le référencement. Bénéficiez d'un support personnalisé et d'une
                gestion efficace des données. Exploitez les avantages du cloud
                pour une croissance sans limites. Transformez votre présence en
                ligne avec notre équipe de professionnels passionnés.
              </p>
            </div>
            <div className="flex justify-center mt-10">
              <img src="../assets/undraw_newspaper_re_syf5_1KjuIsjXme.svg" />
            </div>
          </div>
          <div className="py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
              <div className="mb-10 md:mb-16">
                <h2 className="font-bold text-center mb-4 text-3xl text-slate-900 dark:text-slate-100 md:mb-6 lg:text-4xl">
                  Nos avantages competitifs
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16">
                <div className="flex flex-col items-center">
                  <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4">
                    <span className="w-fit">
                      <svg
                        className="w-full h-full text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
                    SEO Optimisé
                  </h3>
                  <p className="text-center mb-2">
                    Améliorez votre visibilité en ligne avec notre expertise en
                    référencement, pour que votre site web atteigne les sommets
                    des résultats de recherche
                  </p>
                  <Link
                    className="font-bold transition duration-100 text-primary hover:text-primary-700 active:text-primary-700"
                    href="#">
                    <span>plus</span>
                  </Link>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4">
                    <span className="w-fit">
                      <svg
                        className="w-full h-full text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
                    Sécuritée
                  </h3>
                  <p className="text-center mb-2">
                    Protégez vos données et vos utilisateurs grâce à notre
                    approche rigoureuse de la sécurité, garantissant une
                    tranquillité d'esprit totale.
                  </p>
                  <Link
                    className="font-bold transition duration-100 text-primary hover:text-primary-700 active:text-primary-700"
                    href="#">
                    <span>Plus</span>
                  </Link>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4">
                    <span className="w-fit">
                      <svg
                        className="w-full h-full text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
                    Cloud
                  </h3>
                  <p className="text-center mb-2">
                    Profitez des avantages du cloud pour une infrastructure
                    flexible et évolutive, permettant à votre site web de
                    croître avec votre entreprise.
                  </p>
                  <Link
                    className="font-bold transition duration-100 text-primary hover:text-primary-700 active:text-primary-700"
                    href="#">
                    <span>Plus</span>
                  </Link>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4">
                    <span className="w-fit">
                      <svg
                        className="w-full h-full text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
                    Performances
                  </h3>
                  <p className="text-center mb-2">
                    Offrez à vos utilisateurs une expérience fluide et rapide
                    grâce à nos solutions de développement web optimisées pour
                    des performances exceptionnelles.
                  </p>
                  <Link
                    className="font-bold transition duration-100 text-primary hover:text-primary-700 active:text-primary-700"
                    href="#">
                    <span>Plus</span>
                  </Link>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4">
                    <span className="w-fit">
                      <svg
                        className="w-full h-full text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
                    Support
                  </h3>
                  <p className="text-center mb-2">
                    Bénéficiez d'un support technique réactif et personnalisé
                    pour répondre à vos besoins et assurer le bon fonctionnement
                    continu de votre site web.
                  </p>
                  <Link
                    className="font-bold transition duration-100 text-primary hover:text-primary-700 active:text-primary-700"
                    href="#">
                    <span>Plus</span>
                  </Link>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4">
                    <span className="text-[50px] w-full h-full text-primary 2xl:text-primary-500">
                      <div className="p-0.5">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"></path>
                        </svg>
                      </div>
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
                    Base de données
                  </h3>
                  <p className="text-center mb-2">
                    Optimisez la gestion de vos données grâce à notre expertise
                    en bases de données, pour des performances optimales et une
                    manipulation efficace de l'information.
                  </p>
                  <Link
                    className="font-bold transition duration-100 text-primary hover:text-primary-700 active:text-primary-700"
                    href="#">
                    <span>Plus</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="py-10 text-center">
            <div className="px-4 xl:max-w-7xl xl:mx-auto">
              <h1 className="font-black tracking-normal text-3xl dark:text-slate-100 sm:text-4xl sm:text-slate-900">
                Nos Projets
              </h1>
              <div className="grid grid-cols-2 gap-2 mt-7 sm:px-16 lg:grid-cols-8 lg:grid-rows-2 lg:gap-3">
                <div className="col-span-2 lg:col-span-4 lg:row-span-2">
                  <img
                    className="w-full bg-blue-50"
                    src="../assets/img_502.jpeg"
                  />
                </div>
                <div className="lg:col-span-2">
                  <img
                    className="w-full bg-blue-50"
                    src="../assets/img_300.jpeg"
                  />
                </div>
                <div className="lg:col-span-2">
                  <img
                    className="w-full bg-blue-50"
                    src="../assets/img_303.jpeg"
                  />
                </div>
                <div className="col-span-2 lg:block lg:col-span-4">
                  <img
                    className="w-full bg-blue-50"
                    src="../assets/img_296.jpeg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-16 text-gray-700 2xl:py-24 dark:bg-gray-800 dark:text-gray-200">
            <div className="px-4 max-w-7xl mx-auto">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="mb-4 font-bold tracking-tight text-3xl lg:text-4xl">
                  Prix
                </h1>
                <p className="px-5 xl:mx-12">
                  Ces prix sont soumis a l'apréciation de l'équipe
                </p>
              </div>
              <div className="grid gap-x-6 gap-y-12 mb-6 mt-10 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-x-8">
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col border gap-4 p-4 pt-6 rounded-global">
                    <h3 className="text-gray-800 text-2xl font-semibold text-center">
                      Basique
                    </h3>
                    <div className="flex justify-center items-end gap-1">
                      <span className="text-4xl text-gray-800 font-bold">
                        1000€
                      </span>
                      <span className="text-gray-500">/ site</span>
                    </div>
                    <div className="flex justify-center items-center text-gray-500 text-sm gap-1 mb-4">
                      <span>6-mois de garentie</span>
                      <span className="w-fit">
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor">
                          
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                    <Link
                      className="block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm font-semibold text-center outline-none transition duration-100 px-8 py-3 rounded-global md:text-base"
                      href="#">
                      <span>Basique</span>
                    </Link>
                  </div>
                  <div className="flex-1 bg-gray-100 space-y-3 px-4 py-6 rounded-global">
                    <div className="flex gap-2">
                      <span className="w-fit">
                        <svg
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600">Home page</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-fit">
                        <svg
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600">
                        Formulaires de contact
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-fit">
                        <svg
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600">Mentions légales</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-fit">
                        <svg
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600">Gestion de cookies</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col border relative gap-4 p-4 pt-6 rounded-global border-primary">
                    <div className="flex justify-center absolute -top-3 inset-x-0">
                      <span className="h-6 flex justify-center items-center text-white text-xs font-semibold tracking-widest uppercase rounded-full px-3 py-1 bg-primary">
                        Le plus populaire
                      </span>
                    </div>
                    <h3 className="text-gray-800 text-2xl font-semibold text-center">
                      Profesionel
                    </h3>
                    <div className="flex justify-center items-end gap-1">
                      <span className="text-4xl text-gray-800 font-bold">
                        2000€
                      </span>
                      <span className="text-gray-500">/ site</span>
                    </div>
                    <div className="flex justify-center items-center text-gray-500 text-sm gap-1 mb-4">
                      <span>6-mois de garentie</span>
                      <span className="w-fit">
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor">
                          
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                    <Link
                      className="block hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm font-semibold text-center outline-none transition duration-100 px-8 py-3 rounded-global bg-primary md:text-base"
                      href="#">
                      <span>Profesionel</span>
                    </Link>
                  </div>
                  <div className="flex-1 bg-gray-100 space-y-3 px-4 py-6 rounded-global">
                    <div className="flex gap-2">
                      <span className="w-fit">
                        <svg
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600">
                        Service de réservations
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-fit">
                        <svg
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600">
                        Espace administrateur
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-fit">
                        <svg
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600">SEO optimisé</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-fit">
                        <svg
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600">Support par Email</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-fit">
                        <svg
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600">Design sur mesure</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col border gap-4 p-4 pt-6 rounded-global">
                    <h3 className="text-gray-800 text-2xl font-semibold text-center">
                      Custom
                    </h3>
                    <div className="flex justify-center items-end gap-1">
                      <span className="text-4xl text-gray-800 font-bold">
                        3000€ +
                      </span>
                      <span className="text-gray-500">/ site</span>
                    </div>
                    <div className="flex justify-center items-center text-gray-500 text-sm gap-1 mb-4">
                      <span>6-mois de garentie</span>
                      <span className="w-fit">
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor">
                          
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                    <Link
                      className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-indigo-300 text-white text-sm font-semibold text-center outline-none transition duration-100 px-8 py-3 rounded-global md:text-base"
                      href="#">
                      <span>Custom</span>
                    </Link>
                  </div>
                  <div className="flex-1 bg-gray-100 space-y-3 px-4 py-6 rounded-global">
                    <div className="flex gap-2">
                      <span className="w-fit">
                        <svg
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600">
                        Fonctionalités aux chois
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-fit">
                        <svg
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600">
                        System d'enregistrement de compte clients
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-fit">
                        <svg
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600">Bases de données</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-fit">
                        <svg
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600">
                        Support par mail et téléphone
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-fit">
                        <svg
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 shrink-0 text-indigo-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600">Design sur mesure</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-primary-400 py-5 pb-0">
          <div className="text-white max-w-7xl mx-auto flex flex-col gap-y-8 py-5 px-5 sm:flex-row sm:justify-around sm:px-0 lg:gap-x-10">
            <div className="sm:basis-1/5">
              <h1 className="font-black text-3xl dark:text-slate-100 text-white">
                HermesCode
              </h1>
            </div>
            <div className="text-white">
              <h4 className="font-bold text-lg dark:text-slate-100 text-white">
                Services
              </h4>
              <Link
                className="block mt-3 text-sm dark:text-gray-300 text-gray-100"
                href="#">
                <span>Chai </span>
              </Link>
              <Link
                className="block mt-3 text-sm dark:text-gray-300 text-gray-100"
                href="#">
                <span>Generator</span>
              </Link>
            </div>
            <div className="text-white">
              <h4 className="font-bold text-lg dark:text-slate-100 text-white">
                Links
              </h4>
              <Link
                className="block mt-3 text-sm dark:text-gray-300 text-gray-100"
                href="#">
                <span>Politiques de confidentialitées</span>
              </Link>
              <Link
                className="block mt-3 text-sm dark:text-gray-300 text-gray-100"
                href="#">
                <span>Terms et conditions</span>
              </Link>
              <Link
                className="block mt-3 text-sm dark:text-gray-300 text-gray-100"
                href="#">
                <span>Mentions légales</span>
              </Link>
            </div>
            <div>
              <h4 className="font-bold text-lg dark:text-slate-100 text-white">
                Social 
              </h4>
              <Link
                className="block mt-3 text-sm dark:text-gray-300 text-gray-100"
                href="#">
                <span>Twitter</span>
              </Link>
              <Link
                className="block mt-3 text-sm dark:text-gray-300 text-gray-100"
                href="#">
                <span>Facebook</span>
              </Link>
              <Link
                className="block mt-3 text-sm dark:text-gray-300 text-gray-100"
                href="#">
                <span>Instagram</span>
              </Link>
              <Link
                className="block mt-3 text-sm dark:text-gray-300 text-gray-100"
                href="#">
                <span>Phone et Email</span>
              </Link>
            </div>
            <span className="text-[38px]">
              <div className="p-0.5">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
                </svg>
              </div>
            </span>
          </div>
          <div>
            <p className="pb-5 pt-5 text-xs border-t max-w-7xl mx-auto px-5 text-gray-100 sm:px-8 2xl:text-white">
              Copyright @ 2023, HermesCode.com
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
