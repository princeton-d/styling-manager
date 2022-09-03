import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from '../routes/auth';
import Home from '../routes/home';

const AppRouter = ({ isLogin, setIsLogin, handleGoogleLogin }) => {
  return (
    <Router>
      <Routes>
        {isLogin ? <Route path='/' element={<Home />} /> : <Route path='/' element={<Auth handleGoogleLogin={handleGoogleLogin} isLogin={isLogin} setIsLogin={setIsLogin} />} />}
      </Routes>
    </Router>
  )
};

export default AppRouter;