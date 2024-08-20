import './styles/main.scss';
import Layout from './components/Layout';
import ManageEmp from './pages/ManageEmp';

const App = () => {
  return (
    <div>
      <Layout>
        <ManageEmp />
      </Layout>
    </div>
  );
};

export default App;
