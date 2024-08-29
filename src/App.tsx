import './styles/main.scss';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import ManageEmp from './pages/ManageEmp';
import HomeDashBoard from './pages/HomeDashBoard';
import AdminDashBoard from './pages/AdminDashBoard';

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
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
