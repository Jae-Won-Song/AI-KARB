import './styles/main.scss';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import ManageEmp from './pages/ManageEmp/ManageEmp';
import HomeDashBoard from './pages/Dashboard/HomeDashBoard';
import AdminDashBoard from './pages/Dashboard/AdminDashBoard';
import ManageEmpDetail from './pages/ManageEmp/ManageEmpDetail';
import FindUser from './pages/Auth/FindUser';
import SignUp from './pages/Auth/SignUp';
import SignIn from './pages/Auth/SignIn';

const App = () => {
  return (
    <Routes>
      {/* 로그인쪽 넣으세용 */}
      <Route path="/find-user" element={<FindUser />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
              <Route path="/dashboard" element={<HomeDashBoard />} />
              <Route path="/dashboard/admin" element={<AdminDashBoard />} />
              <Route path="admin/manage-emp" element={<ManageEmp />} />
              <Route path="/employee/:employeeId" element={<ManageEmpDetail />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
