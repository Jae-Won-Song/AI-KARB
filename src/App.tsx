import './styles/main.scss';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/Auth/SignIn';

const App = () => {
  return (
    <Routes>
      {/* 로그인쪽 넣으세용 */}
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
              {/* <Routes>레이아웃 필요한거 넣으세용 <Route path="/mypage" element={<Mypage />} /></Routes> */}
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
