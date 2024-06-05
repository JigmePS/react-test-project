import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import "./Search.css";

function Search() {
  const { employees, handleEdit, handleDelete, setIsAdding } = useOutletContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const paginationLimit = 12;

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const renderPageNumbers = (filteredEmployees) => {
    const pageCount = Math.ceil(filteredEmployees.length / paginationLimit);
    const pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`pagination-number ${currentPage === i ? "active" : ""}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const filteredEmployees = employees.filter(employee =>
    employee.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * paginationLimit;
  const endIndex = currentPage * paginationLimit;
  const visibleEmployees = filteredEmployees.slice(startIndex, endIndex);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });

  return (
    <section className="dashboard">
      <div className="plist">

        <div className="topnav">
          <div className="sbar">
            <input
              type="text"
              name="sresult"
              className="sfield"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1); // Reset to first page on search
              }}
            />
          </div>
        </div>
        <main>
          <div className="table-container">
            <table className="task-table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Salary</th>
                  <th>Date</th>
                  <th colSpan={2} className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {visibleEmployees.length > 0 ? (
                  visibleEmployees.map((employee, i) => (
                    <tr key={employee.id}>
                      <td>{startIndex + i + 1}</td>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.email}</td>
                      <td>{formatter.format(employee.salary)}</td>
                      <td>{employee.date}</td>
                      {/* <td className="text-right">
                        <button
                          onClick={() => handleEdit(employee.id)}
                          className="button muted-button"
                        >
                          Edit
                        </button>
                      </td> */}
                      <td className="text-left">
                        <button
                          onClick={() => handleDelete(employee.id)}
                          className="button muted-button"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="text-center">No Employees</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <nav className="pagination-container">
            <button
              className={`pagination-button ${currentPage === 1 ? "disabled" : ""}`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            <div id="pagination-numbers">{renderPageNumbers(filteredEmployees)}</div>
            <button
              className={`pagination-button ${currentPage * paginationLimit >= filteredEmployees.length ? "disabled" : ""}`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage * paginationLimit >= filteredEmployees.length}
            >
              &gt;
            </button>
          </nav>
        </main>
      </div>
    </section>
  );
}

export default Search;
