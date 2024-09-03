import './styles/main.scss';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import ManageEmp from './pages/ManageEmp/ManageEmp';
import HomeDashBoard from './pages/Dashboard/HomeDashBoard';
import AdminDashBoard from './pages/Dashboard/AdminDashBoard';
import ManageEmpDetail from './pages/ManageEmp/ManageEmpDetail';

const App = () => {
  return (
    <Routes>
      {/* 로그인쪽 넣으세용 */}
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
