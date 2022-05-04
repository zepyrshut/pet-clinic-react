import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ViewPet } from './petmanager/ViewPet';
import { Pets } from './petmanager/Pets';
import { AddPet } from './petmanager/AddPet';
import { Navbar } from './partials/Navbar';
import { Dashboard } from './dashboard/Dashboard';


export default class MainContent extends React.Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/pets/:id" component={ViewPet} />
                    <Route path="/pets" component={Pets} />
                    <Route path="/add-pet" component={AddPet} />
                </Switch>
            </Router>
        );
    }
}
