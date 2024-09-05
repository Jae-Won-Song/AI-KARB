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
import ManageTask from './pages/ManageEmp/ManageTask';
import Mypage from './pages/MyPage';
import SameAd from './pages/SameAd/SameAd';
import SameAdResult from './pages/SameAd/SameAdResult';
import IssueAd from './pages/IssueAd/IssueAd';
import IssueAdResult from './pages/IssueAd/IssueAdResult';
import MyTasks from './pages/MyTasks';

const App = () => {
  return (
    <Routes>
      <Route path="/find-user" element={<FindUser />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
              <Route path="/" element={<HomeDashBoard />} />
              <Route path="/dashboard" element={<HomeDashBoard />} />
              <Route path="/dashboard/admin" element={<AdminDashBoard />} />
              <Route path="admin/manage-emp" element={<ManageEmp />} />
              <Route path="/employee/:employeeId" element={<ManageEmpDetail />} />
              <Route path="admin/manage-task" element={<ManageTask />} />
              <Route path="/mypage" element={<Mypage />} />
              <Route path="/my-task" element={<MyTasks />} />
              <Route path="/same-ad" element={<SameAd />} />
              <Route path="/same-ad/result" element={<SameAdResult />} />
              <Route path="/issue-ad" element={<IssueAd />} />
              <Route path="/issue-ad/result" element={<IssueAdResult />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
