import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logoImg from "../../images/logo.png";

const Sidebar = () => {
  const body = document.querySelector("body"),
    modeToggle = body.querySelector(".mode-toggle");
  const sidebar = body.querySelector("#sidenav");
  const sidebarToggle = body.querySelector(".sidebar-toggle");
  let getMode = localStorage.getItem("mode");
  if (getMode && getMode === "dark") {
    body.classList.toggle("dark");
  }
  let getStatus = localStorage.getItem("status");
  if (getStatus && getStatus === "close") {
    sidebar.classList.toggle("close");
  }
  // modeToggle.addEventListener("click", () => {
  //   body.classList.toggle("dark");
  //   if (body.classList.contains("dark")) {
  //     localStorage.setItem("mode", "dark");
  //   } else {
  //     localStorage.setItem("mode", "light");
  //   }
  // });
  // sidebarToggle.addEventListener("click", () => {
  //   sidebar.classList.toggle("close");
  //   if (sidebar.classList.contains("close")) {
  //     localStorage.setItem("status", "close");
  //   } else {
  //     localStorage.setItem("status", "open");
  //   }
  // })

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('isLogin');
    navigate('/login');
  }

  return (
    <>
    {/* <div>
      <ul className="sidebar-nav">
        <li>
          <Link to="/user-management">User Management</Link>
        </li>
        <li>
          <Link to="/faq">FQA</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div> */}
      {/* <body> */}
        <nav id="sidenav">
          <div class="logo-name">
            <div class="images">
              <img src={logoImg} alt="image of Logo" />
            </div>

            <span class="logo_name">OPERIS</span>
          </div>

          <div class="menu-items">
            <ul class="nav-links">
              <li><Link to="/home">
                <i class="uil uil-estate"></i>
                <span class="link-name">Home</span>
              </Link></li>
              <li><Link to="/project-management">
                <i class="uil uil-files-landscapes"></i>
                <span class="link-name">Your Projects</span>
              </Link></li>
              <li><Link to="/search">
                <i class="uil uil-search"></i>
                <span class="link-name">Search</span>
              </Link></li>


            </ul>

            <ul class="logout-mode">
              <li><Link to="/user-management">
                <i class="uil uil-user-circle"></i>
                <span class="link-name">User</span>
              </Link></li>
              {/* <li class="mode">
                <a href="#">
                  <i class="uil uil-moon"></i>
                  <span class="link-name">Dark Mode</span>
                </a>

                <div class="mode-toggle">
                  <span class="switch"></span>
                </div>
              </li> */}
              <li><Link to="/landing" onClick={logout}>
                <i class="uil uil-signout"></i>
                <span class="link-name">Logout</span>
              </Link></li>

              {/* <li>
                <button
                  type="button"
                  onClick={}
                  className="btn btn-danger"
                >Logout</button>
              </li> */}

            </ul>
          </div>
        </nav>
      {/* </body> */}
    </>
  );
}
export default Sidebar;