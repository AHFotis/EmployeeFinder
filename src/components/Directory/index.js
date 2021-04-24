import React, { Component } from "react";
import Search from "../Search";
import API from "../../utils/API";
import SearchResults from "../SearchResults";
import "./style.css";


class Directory extends Component {

    state = {
        result: [],
        search: ""
    };

    componentDidMount() {
        this.searchEmployees()
       
    }

    searchEmployees = () => {
        API.search()
        .then(res => this.setState({ result: res.data.results}))
            // .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name
        const value = event.target.value

        this.setState({
            [name]: value
        })
    }

    //when you render, you will put employee table and search results in here to render.

    render() {
        return (
            <table id="table" className="table table-striped table-hover table-condensed">
            <thead>
                <tr>
                    <th>
                        Image
                    </th>
                    <th className="pointer">
                        Name
                    </th>
                    <th>
                        Phone
                    </th>
                    <th>
                        Email 
                    </th>
                    <th>
                        DOB
                    </th>
                </tr>
            </thead>
          <SearchResults results={this.state.result}/>
        
        </table>
        );
    }
}

export default Directory