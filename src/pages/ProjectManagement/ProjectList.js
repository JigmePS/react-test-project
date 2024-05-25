import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Project.css";

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const paginationLimit = 10;

  useEffect(() => {
    // Simulated API call to fetch projects data
    setTimeout(() => {
      const data = [
        { id: 1, name: 'Project 1', description: 'Description 1', status: 'Active' },
        { id: 2, name: 'Project 2', description: 'Description 2', status: 'Inactive' },
        { id: 3, name: 'Project 3', description: 'Description 3', status: 'Active' },
        { id: 4, name: 'Project 4', description: 'Description 4', status: 'Inactive' },
        { id: 5, name: 'Project 5', description: 'Description 5', status: 'Active' },
        // Add more projects here if needed
      ];
      setProjects(data);
    }, 500);
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
    <div>
      <section className="dashboard">
        <div className="plist">
          <div className="topnav">
            <span>YOUR PROJECTS</span>
            <div className="topnav-right">
              <Link className="addbtn" to=""><i className="uil uil-plus-circle"></i></Link>
            </div>
          </div>
          <main>
            <div className="list-container">
              <ul className="list-group" id="paginated-list" aria-live="polite">
                {visibleProjects.map((project) => (
                  <li key={project.id}><Link to={`user?page=task&pid=${project.id}&pname=${project.name}&pstatus=${project.status}`}>{project.name}</Link></li>
                ))}
              </ul>
            </div>
            <nav className="pagination-container">
              <button
                className={`pagination-button ${currentPage === 1 ? "disabled" : ""}`}
                aria-label="Previous page"
                title="Previous page"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &lt;
              </button>
              <div id="pagination-numbers">
                {renderPageNumbers()}
              </div>
              <button
                className={`pagination-button ${currentPage * paginationLimit >= projects.length ? "disabled" : ""}`}
                aria-label="Next page"
                title="Next page"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage * paginationLimit >= projects.length}
              >
                &gt;
              </button>
            </nav>
          </main>
        </div>
      </section>
    </div>
  );
}

export default ProjectList;
