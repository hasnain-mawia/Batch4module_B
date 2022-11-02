import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "../screen/admin";
import Home from "../screen/home";
import Login from "../screen/login";
import Signup from "../screen/signup";
import StudentList from "../screen/students";
function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/:id" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="admin/*" element={<Admin />} />
          <Route path="stdlist" element={<StudentList />} />
        </Routes>
      </Router>
    </>
  );
}
export default AppRouter;
