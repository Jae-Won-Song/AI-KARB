import './styles/main.scss';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import ManageEmp from './pages/ManageEmp/ManageEmp';
import HomeDashBoard from './pages/Dashboard/HomeDashBoard';
import AdminDashBoard from './pages/Dashboard/AdminDashBoard';
import SignIn from './pages/Auth/SignIn';
import FindUser from './pages/Auth/FindUser';
import SignUp from './pages/Auth/SignUp';
import Mypage from './pages/MyPage';
import SignUpRequest from './pages/SignUpRequest';
import MyTasks from './pages/MyTasks';
import ManageUser from './pages/ManageUser';
import IssueAd from './pages/IssueAd/IssueAd';
import IssueAdResult from './pages/IssueAd/IssueAdResult';
import SameAd from './pages/SameAd/SameAd';
import SameAdResult from './pages/SameAd/SameAdResult';
import ManageTask from './pages/ManageEmp/ManageTask';
import ManageEmpDetail from './pages/ManageEmp/ManageEmpDetail';
import PrivateRoute from './components/PrivateRoute';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserFromLocalStorage } from './redux/authSlice';
import { RootState } from './redux/authStore';
import ErrorPages from './pages/ErrorPages';
import ManageTaskDone from './pages/ManageEmp/ManageTaskDone';

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    dispatch(loadUserFromLocalStorage());
    setLoading(false);
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/find-user" element={<FindUser />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<SignIn />} />

      <Route
        path="/*"
        element={
          <PrivateRoute>
            <Layout>
              <Routes>
                <Route path="/dashboard" element={<HomeDashBoard />} />
                <Route path="/dashboard/admin" element={<AdminDashBoard />} />
                <Route path="admin/manage-emp" element={<ManageEmp />} />
                <Route path="/employee/:employeeId" element={<ManageEmpDetail />} />
                <Route path="/admin/manage-task" element={<ManageTask />} />
                <Route path="/admin/manage-task-done" element={<ManageTaskDone />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/admin/approve-user" element={<SignUpRequest />} />
                <Route path="/admin/manage-user" element={<ManageUser />} />
                <Route path="/my-task" element={<MyTasks />} />
                <Route path="/same-ad" element={<SameAd />} />
                <Route path="/same-ad/result" element={<SameAdResult />} />
                <Route path="/issue-ad" element={<IssueAd />} />
                <Route path="/issue-ad/result" element={<IssueAdResult />} />
                <Route path="*" element={<ErrorPages />} />
              </Routes>
            </Layout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
