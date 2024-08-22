import './styles/main.scss';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import SignUpRequest from './pages/SignUpRequest';

const App = () => {
  return (
    <Routes>
      {/* 로그인쪽 넣으세용 */}
      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
              <Route path="/admin/approve-user" element={<SignUpRequest />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
