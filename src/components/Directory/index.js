import React, { Component } from "react";
import Search from "./Search";
import API from "../utils/API";


class Directory extends Component {

    state = {
        result: {},
        search: ""
    };

    componentDidMount() {
        this.searchEmployees()
    }

    searchEmployees = () => {
        API.search()
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    // handleInputChange = event => {
    //     const name = event.target.name
    //     const value = event.target.value

    //     this.setState({
    //         [name]: value
    //     })
    // }

    //when you render, you will put employee table and search results in here to render.
}

export default Directory