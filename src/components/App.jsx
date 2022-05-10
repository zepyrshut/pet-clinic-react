import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ViewPet } from './petmanager/ViewPet';
import { Pets } from './petmanager/Pets';
import { AddPet } from './petmanager/AddPet';
import { Navbar } from './partials/Navbar';
import { Dashboard } from './dashboard/Dashboard';


export default class App extends React.Component {
    render() {
        return (
            <div className="bg-gradient-to-br from-nature-soft-sea-blue to-nature-soft-blue dark:from-nature-dark-blue dark:to-nature-black">
            <Router>
                <Navbar />
                <Switch>
                    <div className="max-w-6xl mx-auto py-4">
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/pets/:id" component={ViewPet} />
                        <Route path="/pets" component={Pets} />
                        <Route path="/add-pet" component={AddPet} />
                    </div>
                </Switch>
            </Router>
            </div>
        );
    }
}
