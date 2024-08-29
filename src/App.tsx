import './styles/main.scss';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import ManageEmp from './pages/ManageEmp';
import HomeDashBoard from './pages/HomeDashBoard';

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
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
