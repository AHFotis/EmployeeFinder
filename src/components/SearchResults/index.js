import React from "react";
import formatDate from "../../utils/formatDate"


function SearchResults(props) {

   
    return (
        <tbody>
            {props.results.filter(search => {
                let name = search.name.first.toLowerCase() + search.name.last.toLowerCase();
                let searchName = props.value.toLowerCase()
                let result = name.includes(searchName)
               return result
            }).map(result => (
                <tr key={result.login.uuid}>
                    <td data-th="image">
                        <img src={result.picture.medium} alt="Employee"></img>
                    </td>
                    <td data-th="name">
                        {result.name.first} {result.name.last}
                    </td>
                    <td data-th="phone">
                        {result.cell}
                    </td>
                    <td data-th="email">
                        <a href={`mailto:${result.email}`} target="_blank" rel="noreferrer">
                            {result.email}
                        </a>
                    </td>
                    <td data-th="DOB">
                        {formatDate(result.dob.date)}
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

export default SearchResults;