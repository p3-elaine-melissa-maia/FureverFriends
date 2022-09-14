import React from "react";

export default class PetFinder extends React.Component {

    state = {
        loading: true
    };

    async componentDidMount() {
        const url = "https://api.petfinder.com/v2/animals";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loading: false });
        console.log(data.results[0]);
    }

    render() {

        if (this.state.loading) {
            return <div>loading...</div>;
        }
        
        if (!this.state.person) {
            return <div>Could not find a person</div>;
        }

        return (
                    <div>
                    <div>{this.state.person.name}</div>
                    <div>{this.state.person.breed}</div>
                    <div>{this.state.person.size}</div>
                    <div>{this.state.person.gender}</div>
                    <div>{this.state.person.age}</div>
                    </div>) }
        
    }
