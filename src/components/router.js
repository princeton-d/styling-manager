import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from '../routes/auth';
import Home from '../routes/home';

const AppRouter = ({ isLogin, handleGoogleLogin }) => {
  return (
    <Router>
      <Routes>
        {isLogin ? <Route path='/' element={<Home />} /> : <Route path='/' element={<Auth handleGoogleLogin={handleGoogleLogin} />} />}
      </Routes>
    </Router>
  )
};

export default AppRouter;