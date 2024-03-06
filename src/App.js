import { Reset } from 'styled-reset';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import { MENUS } from './constants/menu';

function App() {
  return (
    <>
      <Reset/>
      <SideBar/>
        <Routes>
          {/* <Route path='/mypage' element={<Mypage/>}/> 원래는 이렇게 Routes안에 Route로 넣어줘야한다*/}
          {/* <Route path='/sidebar' element={<SideBar/>}/> */}
          {MENUS.map(menu => <Route key={menu.id} path={menu.path} element={menu.element} />)}
        </Routes>
      
    </>
  );
}

export default App;
