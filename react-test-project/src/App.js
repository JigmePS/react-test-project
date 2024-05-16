import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './pages/theme/Layout';
import ProjectManagement from "./pages/ProjectManagement/ProjectManagement";
// import AddProject from "./pages/ProjectManagement/AddProject";
import Home from "./pages/Home";
import Search from "./pages/Search/Search";
// import ProjectDetail from "./pages/ProjectManagement/UserDetail";
import Login from "./pages/Auth/Login";
import PrivateRoute from "./routes/PrivateRoute";
import Landing from "./pages/Landing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute component={Layout} />} >
            <Route path="/project-management" element={<PrivateRoute component={ProjectManagement}/>} />
            {/* <Route path="/project-management/add" element={<PrivateRoute component={AddProject}/>} />
            <Route path="/project-management/detail/:pId" element={<PrivateRoute component={ProjectDetail}/>} /> */}
            <Route path="/home" element={<PrivateRoute component={Home}/>} />
            <Route path="/search" element={<PrivateRoute component={Search}/>} />
          </Route>
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
