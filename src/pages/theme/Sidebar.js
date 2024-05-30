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

        <nav id="sidenav">
          <div class="logo-name">
            <div class="images">
              <img src={logoImg} alt="image of Logo" />
            </div>

            <span class="logo_name">EMS</span>
          </div>

          <div class="menu-items">
            <ul class="nav-links">
              <li><Link to="/employee-list">
                <i class="uil uil-user"></i>
                <span class="link-name">Employees List</span>
              </Link></li>
              <li><Link to="/search">
                <i class="uil uil-search"></i>
                <span class="link-name">Search</span>
              </Link></li>


            </ul>

            <ul class="logout-mode">
              <li><Link to="/login" onClick={logout}>
                <i class="uil uil-signout"></i>
                <span class="link-name">Logout</span>
              </Link></li>

            </ul>
          </div>
        </nav>
    </>
  );
}
export default Sidebar;