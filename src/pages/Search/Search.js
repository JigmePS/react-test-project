import React, { useEffect, useState } from "react";
import "./Search.css";

const Search = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const paginationLimit = 12;

  useEffect(() => {
    // Simulated API call to fetch projects data
    const fetchData = async () => {
      try {
        const response = await fetch("your API endpoint");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

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

  return (
    <section className="dashboard">
      <div className="plist">
        <div className="topnav">
          <form action="user?page=searchproject" method="post">
            <div className="sbar">
              <input type="text" name="sresult" className="sfield" placeholder="Search" />
              <button type="submit" className="sicon">
                <i className="uil uil-search"></i>
              </button>
            </div>
          </form>
        </div>

        <main>
          <div className="table-container">
            <table className="task-table">
              <tbody>
                {visibleProjects.map((project, index) => (
                  <tr key={index}>
                    <td className="sname">
                      <a href={`user?page=sptask&pid=${project.pid}&pname=${project.pname}`}>{project.pname}</a>
                    </td>
                  </tr>
                ))}
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
};

export default Search;