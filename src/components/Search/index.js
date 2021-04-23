import React from "react";
import "./style.css";


function Search(props) {
    return (

    <div className="searchForm">

        <form className="form">

            <input
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search For an Employee"
                id="search"
            />
        </form>


</div>





    )
}

export default Search