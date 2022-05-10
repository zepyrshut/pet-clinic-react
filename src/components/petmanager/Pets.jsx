import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { faHourglass } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Pets extends React.Component {

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
                    
                        
                            <div className="text-center text-white text-4xl bebas-neue py-7 rounded-md shadow-lg bg-gradient-to-r from-nature-soft-blue to-nature-dark-blue mb-3 dark:text-nature-dark-blue dark:from-nature-soft-sea-blue dark:to-nature-soft-blue transition-colors">Mascotas</div>
                            
           



         

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