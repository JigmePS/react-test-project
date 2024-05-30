import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './pages/theme/Layout';
import Search from "./pages/Search/Search";
import Login from "./pages/Auth/Login";
import PrivateRoute from "./routes/PrivateRoute";
import EmployeeList from "./pages/EmployeeManagement/EmployeeList";
import EmployeeAdd from "./pages/EmployeeManagement/EmployeeAdd";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute component={Layout} />} >
            <Route path="/employee-list" element={<PrivateRoute component={EmployeeList}/>} />
            <Route path="/employee-add" element={<PrivateRoute component={EmployeeAdd}/>} />
            <Route path="/search" element={<PrivateRoute component={Search}/>} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
