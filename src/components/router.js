import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from '../routes/auth/auth';
import BoxShadowManager from '../routes/boxShadowManager/boxShadowManager'
import FontManager from '../routes/fontManager/fontManager'
import TextShadowManager from '../routes/textShadowManager/textShadowManager'
import GirdManager from '../routes/girdManager/girdManager'
import FlexManager from '../routes/flexManager/flexManager';
import Home from '../routes/home/home';
import Navigation from './navigation/navigation';

const AppRouter = ({ isLogin, setIsLogin, userInfo }) => {
  return (
    <Router basename='styling-manager'>
      {isLogin && <Navigation setIsLogin={setIsLogin} />}
      <Routes>
        {isLogin ? <Route path='/' element={<Home userInfo={userInfo} />} /> : <Route path='/' element={<Auth />} />}
        <Route path='/boxShadowManager' element={<BoxShadowManager />} />
        <Route path='/textShadowManager' element={<TextShadowManager />} />
        <Route path='/fontManager' element={<FontManager />} />
        <Route path='/flexManager' element={<FlexManager />} />
        <Route path='/gridManager' element={<GirdManager />} />
      </Routes>
    </Router>
  )
};

export default AppRouter;