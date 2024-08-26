import './styles/main.scss';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Tab from './components/Tab';

const App = () => {
  return (
    <Tab content="밥" styleName="active" />
    // <Routes>
    //   {/* 로그인쪽 넣으세용 */}
    //   <Route
    //     path="/*"
    //     element={
    //       <Layout>
    //         <Routes>
    //           {/* <Routes>레이아웃 필요한거 넣으세용 <Route path="/mypage" element={<Mypage />} /></Routes> */}
    //         </Routes>
    //       </Layout>
    //     }
    //   />
    // </Routes>
  );
};

export default App;
