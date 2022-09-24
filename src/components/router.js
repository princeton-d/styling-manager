import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from '../routes/auth/auth';
import BoxShadowManager from '../routes/boxShadowManager/boxShadowManager'
import FontManager from '../routes/fontManager/fontManager'
import TextShadowManager from '../routes/textShadowManager/textShadowManager'
import GirdManager from '../routes/girdManager/girdManager'
import FlexManager from '../routes/flexManager/flexManager';
import Home from '../routes/home/home';
import Navigation from './navigation/navigation';

const AppRouter = ({ isLogin, setIsLogin }) => {
  return (
    <Router basename='styling-manager'>
      {isLogin && <Navigation isLogin={isLogin} setIsLogin={setIsLogin} />}
      <Routes>
        {isLogin ? <Route path='/' element={<Home isLogin={isLogin} setIsLogin={setIsLogin} />} /> : <Route path='/' element={<Auth isLogin={isLogin} setIsLogin={setIsLogin} />} />}
        <Route path='/boxShadowManager' element={<BoxShadowManager isLogin={isLogin} setIsLogin={setIsLogin} />} />
        <Route path='/textShadowManager' element={<TextShadowManager isLogin={isLogin} setIsLogin={setIsLogin} />} />
        <Route path='/fontManager' element={<FontManager isLogin={isLogin} setIsLogin={setIsLogin} />} />
        <Route path='/flexManager' element={<FlexManager isLogin={isLogin} setIsLogin={setIsLogin} />} />
        <Route path='/gridManager' element={<GirdManager isLogin={isLogin} setIsLogin={setIsLogin} />} />
      </Routes>
    </Router>
  )
};

export default AppRouter;