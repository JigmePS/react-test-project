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
              <a href="user?page=listyourprojects">
                <span class="number">Project Management</span>
              </a>
            </div>
            <div class="box box2">
              <i class="uil uil-book"></i>
              <span class="number">Task Management</span>
            </div>
            <div class="box box3">
              <i class="uil uil-search"></i>
              <a href="user?page=searchbox">
                <span class="number">Search Projects</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>

  );
}

export default Home;