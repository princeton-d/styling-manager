import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Auth from '../routes/auth/auth';
import BoxShadowManager from '../routes/boxShadowManager/boxShadowManager'
import ColorManager from '../routes/colorManager/colorManager'
import FontManager from '../routes/fontManager/fontManager'
import TextShadowManager from '../routes/textShadowManager/textShadowManager'
import GirdManager from '../routes/girdManager/girdManager'
import FlexManager from '../routes/flexManager/flexManager';
import Home from '../routes/home/home';

const AppRouter = ({ isLogin, setIsLogin, handleGoogleLogin }) => {
  return (
    <Router>
      <Routes>
        {isLogin ? <Route path="/" element={<Home />} /> : <Route path='/' element={<Auth handleGoogleLogin={handleGoogleLogin} isLogin={isLogin} setIsLogin={setIsLogin} />} />}
        <Route path='boxShadowManager' element={<BoxShadowManager />} />
        <Route path='textShadowManager' element={<TextShadowManager />} />
        <Route path='colorManager' element={<ColorManager />} />
        <Route path='fontManager' element={<FontManager />} />
        <Route path='flexManager' element={<FlexManager />} />
        <Route path='girdManager' element={<GirdManager />} />
      </Routes>
    </Router>
  )
};

export default AppRouter;