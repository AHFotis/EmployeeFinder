import React from "react";


function SearchResults(props) {
  return (
      <tbody>
      {props.results.map(result => (
          <tr>
              <td data-th="image">
                  <img src={result.picture.thumbnail}></img>
              </td>
              <td data-th="name">
                  {result.name.first} {result.name.last}
              </td>
              <td data-th="phone">
                  {result.cell}
              </td>
              <td data-th="email">
                  {result.email}
              </td>
              <td data-th="DOB">
                  {result.dob.date}
              </td>
          </tr>
      ))}
      </tbody>
  );
}

export default SearchResults;