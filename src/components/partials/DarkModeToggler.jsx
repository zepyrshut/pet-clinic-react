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
            <FontAwesomeIcon className="mr-2" icon={faSun} /> :
            <FontAwesomeIcon className="mr-2" icon={faMoon} />}
           {colorTheme === 'light' ? 'Cambiar a modo claro' : 'Cambiar a modo osucro'}
        </span>
   

    </Fragment>
  );
}

