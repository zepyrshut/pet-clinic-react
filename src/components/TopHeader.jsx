import React, { Fragment } from "react";
import { useDarkMode } from "../hook/useDarkMode";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'



export const TopHeader = () => {

  const [colorTheme, setTheme] = useDarkMode();


  return (
    <Fragment>

      <div className="bg-soft-lilac drop-shadow-lg dark:bg-digi-denim transition-all duration-200">
        <div className="bebas-neue p-5 text-purple dark:text-soft-lilac">
          <h1 className="text-9xl font-semibold">Veterinario Dogtor</h1>
          <h2 className="text-7xl">La salud de su mascota en las mejores manos</h2>
        </div>
      </div>

      <div className="fixed p-5 top-0 right-0">
        <span onClick={() => setTheme(colorTheme)}>
          {colorTheme === 'light' ?
            <FontAwesomeIcon className="text-white" icon={faSun} size="2x" /> :
            <FontAwesomeIcon className="text-purple" icon={faMoon} size="2x" />}
        </span>
      </div>
    </Fragment>


  );
}

