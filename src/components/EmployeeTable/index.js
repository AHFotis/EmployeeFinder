import React from "react";
import "./style.css";

function EmployeeTable() {
return <table id="table" className="table table-striped table-hover table-condensed">
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

</table>
}

export default EmployeeTable;