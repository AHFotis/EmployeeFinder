import React from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";
import EmployeeTable from "./components/EmployeeTable";

function App() {
  return (
      <div>
      <Nav />
      <Search />
      <EmployeeTable />
      </div>
  );
} 

export default App;