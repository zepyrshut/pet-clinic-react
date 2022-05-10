import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog, faListCheck, faPaw, faPeopleRoof, faMessage } from "@fortawesome/free-solid-svg-icons";
import React, { Fragment } from "react";
import { DarkModeToggler } from "./DarkModeToggler";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <Fragment>
            {/* <nav className="bg-white px-2 sm:px-4 py-2.5 shadow-lg border-b border-black dark:bg-gray-800 dark:shadow-lg dark:border-soft-lilac">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="https://flowbite.com" className="flex items-center">
                        <FontAwesomeIcon icon={faPaw} className="mr-2 text-blue-500 text-3xl dark:text-white" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap amatic-sc dark:text-white">DOGTOR</span>
                    </a>
                    <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only">Menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto duration-500 transition-all" id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <NavLink to="/dashboard" activeClassName="text-turquoise dark:text-soft-lilac" className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:text-turquoise md:hover:bg-transparent md:border-0 md:hover:turquoise md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-soft-lilac md:dark:hover:bg-transparent dark:border-gray-700">Tablero</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pets" activeClassName="text-turquoise dark:text-soft-lilac" className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:text-turquoise md:hover:bg-transparent md:border-0 md:hover:turquoise md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-soft-lilac md:dark:hover:bg-transparent dark:border-gray-700">Mascotas</NavLink>
                            </li>
                            <li>
                                <NavLink to="/add-pet" activeClassName="text-turquoise dark:text-soft-lilac" className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:text-turquoise md:hover:bg-transparent md:border-0 md:hover:turquoise md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-soft-lilac md:dark:hover:bg-transparent dark:border-gray-700">Añadir mascota</NavLink>
                            </li>
                            <li>
                                <a className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><DarkModeToggler /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}


            <div className="text-nature-black text-5xl dark:text-a-gray-medium">
                <header className="py-3 text-center">
                    <a href="#"> <FontAwesomeIcon icon={faPaw} className="mr-2" />
                        <span className="amatic-sc font-bold">Dogtor</span></a>
                </header>
                <nav className="bebas-neue tracking-wider">
                    <ul className="text-lg">
                        <NavLink to="/pets"><li className="p-1 border-t border-nature-black dark:border-a-gray-medium"><FontAwesomeIcon icon={faDog} className=" mr-2" />Ver mascotas</li></NavLink>
                        <a href="#"><li className="p-1 border-t border-nature-black dark:border-a-gray-medium"><FontAwesomeIcon icon={faListCheck} className=" mr-2" />Gestionar clínica</li></a>
                        <a href="#"><li className="p-1 border-t border-nature-black dark:border-a-gray-medium"><FontAwesomeIcon icon={faPeopleRoof} className=" mr-2" />Sobre nosotros</li></a>
                        <a href="#"><li className="p-1 border-t border-nature-black dark:border-a-gray-medium"><FontAwesomeIcon icon={faMessage} className=" mr-2" />Contacto</li></a>
                        <a href="#"><li className="p-1 border-t border-b border-nature-black dark:border-a-gray-medium"><DarkModeToggler /></li></a>
                    </ul>
                </nav>
            </div>
        </Fragment>
    )
}