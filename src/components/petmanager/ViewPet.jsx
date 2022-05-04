import React, { Fragment } from 'react'

export class ViewPet extends React.Component {

    state = { pet: {} };

    componentDidMount() {
        this.setState({
            pet: {
                id: this.props.match.params.id,
                name: "Toby",
                type: "dog",
                age: 10,
            }
        })
    }

    render() {
        return (
            <Fragment>
                <div>mascota {this.state.pet.name}</div>

                <table>
                    <tr>
                        <td>Id</td>
                        <td>{this.state.pet.id}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{this.state.pet.name}</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td>{this.state.pet.type}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{this.state.pet.age}</td>
                    </tr>

                </table>





            </Fragment>
        )
    }
}