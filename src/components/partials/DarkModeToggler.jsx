import React, { Fragment } from "react";
import { useDarkMode } from "../../hook/useDarkMode";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export const DarkModeToggler = () => {

  const [colorTheme, setTheme] = useDarkMode();

  return (
    <Fragment>

      
        <span onClick={() => setTheme(colorTheme)}>
          {colorTheme === 'light' ?
            <FontAwesomeIcon className="" icon={faSun} /> :
            <FontAwesomeIcon className="" icon={faMoon} />}
        </span>
   

    </Fragment>
  );
}

