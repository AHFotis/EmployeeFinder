import React from "react";
import formatDate from "../../utils/formatDate"


function FullEmployee(props) {

  return (
      <tbody>
      {props.results.map(result => (
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
                 <a href={ `mailto:${result.email}` } target="_blank" rel="noreferrer">
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

export default FullEmployee;