import React from "react";


function FullEmployee(props) {

    function formatDate(date) {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("-");
        return formattedDate;
      }
    //for filter, use ternary expression to check if search is empty or not. if empty, do below, if not, use filter
  return (
      <tbody>
          
      {props.results.map(result => (
          <tr key={result.login.uuid}>
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
                 <a href={ `mailto:${result.email}` } target="_blank">
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