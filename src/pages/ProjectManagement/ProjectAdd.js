import React, { useState } from 'react';
import './AddProject.css'; // Assume you save the CSS content in this file

function AddProject() {
  const [projectName, setProjectName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    // This could involve making a POST request to your backend API
    console.log("Project Name:", projectName);

    // Reset the input field after submission
    setProjectName('');
  };

  return (
    <div>
      <section className="dashboard">
        <div>
          <div className="topnav">
            <span>Create New Project</span>
          </div>
          <div className="form-container">
            <form onSubmit={handleSubmit} className="addform">
              <label>Project Name:</label>
              <input
                type="text"
                className="pfield"
                name="pname"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
              <input type="submit" value="Add" className="paddbtn" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddProject;
