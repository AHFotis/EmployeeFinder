import React, { Component } from "react";
import Search from "../Search";
import API from "../../utils/API";
import SearchResults from "../SearchResults";
import FullEmployee from "../FullEmployee";
import "./style.css";


class Directory extends Component {

    state = {
        result: [],
        search: "",
        order: ""
    };

    componentDidMount() {
        this.searchEmployees()

    }

    searchEmployees = () => {
        API.search()
            .then(res => this.setState({ result: res.data.results }))
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

    handleSubmit = event => {
        event.preventDefault()

        if (`${this.state.order}` === "" || `${this.state.order}` === "descending") {

            this.setState({
                order: "ascending"
            })

            const sortedEmployee = this.state.result.sort((a, b) => {
                let nameA = a.name.first;
                let nameB = b.name.first;

                if (nameA < nameB) {
                    return -1
                }

                return 0;
            });

            console.log(sortedEmployee)

            this.setState({
                result: sortedEmployee
            })
        }

        else if (`${this.state.order}` === "ascending") {

            this.setState({
                order: "descending"
            })

            const sortedEmployee = this.state.result.sort((a, b) => {
                let nameA = a.name.first;
                let nameB = b.name.first;

                if (nameA > nameB) {
                    return -1
                }
                return 0;
            });

            this.setState({
                result: sortedEmployee
            })
        }
    }


    render() {
        return (
            <div id="tableSection">
                <Search
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                />
                <table id="table" className="table table-striped table-hover table-condensed">
                    <thead id="tableHead">
                        <tr>
                            <th>
                                Image
                    </th>
                            <th className="pointer"
                                data-order={this.state.order}
                                onClick={this.handleSubmit}
                                >
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

                    {!this.state.search ? (
                        <FullEmployee results={this.state.result} />
                    ) : (
                        <SearchResults results={this.state.result} value={this.state.search} />
                    )}
                </table>
            </div>
        );
    }
}

export default Directory