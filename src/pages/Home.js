import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section class="dashboard">

      <div class="top">
        <div class="search-box">
          <h1>Project Manager</h1>
        </div>
      </div>

      <div class="dash-content">
        <div class="overview">
          <div class="title">
            <i class="uil uil-compress-point"></i>
            <span class="text">Features</span>
          </div>

          <div class="boxes">
            <div class="box box1">
              <i class="uil uil-chart"></i>
              <Link to="/project-management">
                <span class="number">Project Management</span>
              </Link>
            </div>
            <div class="box box2">
              <i class="uil uil-book"></i>
              <span class="number">Task Management</span>
            </div>
            <div class="box box3">
              <i class="uil uil-search"></i>
              <Link to="/search">
                <span class="number">Search Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>

  );
}

export default Home;