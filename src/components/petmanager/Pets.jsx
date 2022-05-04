import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { faHourglass } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Pets extends Component {

    state = {
        pets: [],
        isLoaded: false,
    };

    componentDidMount() {
        fetch("http://localhost:8081/pets")
            //.then((response) => response.json())
            .then((response) => {
                if (response.status !== 200) {
                    let err = Error;
                    err.message = "Invalid response code: " + response.status;
                    this.setState({ error: err });
                }
                return response.json();
            })
            .then((json) => {
                this.setState({
                    pets: json.pets,
                    isLoaded: true,

                }, (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                })
            })
    }

    render() {

        const { pets, isLoaded, error } = this.state;

        console.log(pets);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <FontAwesomeIcon icon={faHourglass} spin />
        } else {
            return (
                <Fragment>
                    <div>Mascotas</div>

                    <ul>
                        {pets.map((pet) => (
                            <li key={pet.id}>
                                <Link to={`/pets/${pet.id}`}>{pet.pet_name}</Link>
                            </li>
                        ))}
                    </ul>
                </Fragment>
            )
        }
    }
}