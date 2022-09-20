import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
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
    <Router basename='styling-manager'>
      <Routes>
        <Route path='/' element={<Auth handleGoogleLogin={handleGoogleLogin} isLogin={isLogin} setIsLogin={setIsLogin} />} />
        <Route path="/home" element={<Home />} />
        <Route path='/home/boxShadowManager' element={<BoxShadowManager />} />
        <Route path='/home/textShadowManager' element={<TextShadowManager />} />
        <Route path='/home/colorManager' element={<ColorManager />} />
        <Route path='/home/fontManager' element={<FontManager />} />
        <Route path='/home/flexManager' element={<FlexManager />} />
        <Route path='/home/gridManager' element={<GirdManager />} />
      </Routes>
    </Router>
  )
};

export default AppRouter;