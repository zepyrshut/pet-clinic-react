import React, { Component, Fragment } from 'react'

export default class Pets extends React.Component {

    state = { pets: [] };

    componentDidMount() {
        this.setState({
            pets: [
                { id: 1, name: 'Toby', type: 'dog', age: 10 },
                { id: 2, name: 'Rufus', type: 'cat', age: 15 },
                { id: 3, name: 'Molly', type: 'dog', age: 5 },
            ]
        });
    }

    render() {
        return (
            <Fragment>
                <div>Mascotas</div>

                <ul>
                    {this.state.pets.map((pet) => (
                        <li key={pet.id}>{pet.name}</li>
                    ))}
                </ul>
            </Fragment>
        )
    }
}