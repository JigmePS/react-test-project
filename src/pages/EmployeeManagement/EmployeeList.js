import React, { Link, useState } from "react";
import { useOutletContext } from "react-router-dom";
import "./Employee.css";

function EmployeeList() {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const paginationLimit = 12;

  const { employees, handleEdit, handleDelete, setIsAdding } = useOutletContext();

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const renderPageNumbers = () => {
    const pageCount = Math.ceil(projects.length / paginationLimit);
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

  const startIndex = (currentPage - 1) * paginationLimit;
  const endIndex = currentPage * paginationLimit;
  const visibleProjects = projects.slice(startIndex, endIndex);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });

  return (
    <section className="dashboard">
      <div className="plist">
        <div className="topnav">
          <span>EMPLOYEE LIST</span>
          <div className="topnav-right">
            <button onClick={() => setIsAdding(true)} className=''>Add</button>
            {/* <Link className="addbtn" to="/employee-add"><i className="uil uil-plus-circle"></i></Link> */}
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
                {employees.length > 0 ? (
                  employees.map((employee, i) => (
                    <tr key={employee.id}>
                      <td>{i + 1}</td>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.email}</td>
                      <td>{formatter.format(employee.salary)}</td>
                      <td>{employee.date}</td>
                      <td className="text-right">
                        <button
                          onClick={() => handleEdit(employee.id)}
                          className="button muted-button"
                        >
                          Edit
                        </button>
                      </td>
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
            <div id="pagination-numbers">{renderPageNumbers()}</div>
            <button
              className={`pagination-button ${currentPage * paginationLimit >= projects.length ? "disabled" : ""}`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage * paginationLimit >= projects.length}
            >
              &gt;
            </button>
          </nav>
        </main>
      </div>
    </section>
  );
}

export default EmployeeList;