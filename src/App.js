import { Reset } from 'styled-reset';
import Mypage from './pages/Mypage/Mypage';
import { Route, Routes } from 'react-router-dom';
import { MENUS } from './constants/menu';

function App() {
  return (
    <>
      <Reset/>
      
      <Routes>
        {/* <Route path='/mypage' element={<Mypage/>}/> 원래는 이렇게 Routes안에 Route로 넣어줘야한다*/}
        {MENUS.map(menu => <Route key={menu.id} path={menu.path} element={menu.element} />)}
      </Routes>
      
    </>
  );
}

export default App;
