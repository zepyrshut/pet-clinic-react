import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Pets from '../components/petmanager/Pets'
import AddPet from '../components/petmanager/AddPet'
import ViewPet from '../components/petmanager/ViewPet'
import Main from '../components/Main'

export default class RouterPetClinic extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/pets">Ver mascotas</Link></li>
                            <li><Link to="/add-pet">Añadir mascota</Link></li>
                        </ul>
                    </div>
  
                </div>

                <Switch>
          <Route path="/pets" component={Pets} />
          <Route path="/add-pet" component={AddPet} />
          <Route path="/view-pet/:id" component={ViewPet} />
          <Route path="/" component={Main} />
        </Switch>

            </Router>
        );
    }
}