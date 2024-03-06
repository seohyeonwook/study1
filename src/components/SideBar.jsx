/** @jsxImportSource @emotion/react */
import *as S from "./style";
import { DiApple } from "react-icons/di";
import { AiFillAndroid } from "react-icons/ai";

import { useState } from "react";
import { MENUS } from "../constants/menu";
import { Link } from "react-router-dom";

function SideBar() {

    const [ isShow, setShow ] = useState(false);
    // 초기값이 false
    // useState = [현재값,변경시켜줄때] =useState(현재값)
    // ex) const [time, setTime] = useState(5);
    // 그럼 time = 5 이고 이걸 6으로 바꾸고싶으면 setTime 함수를 불러서 인자로 변경하고싶은 값으로 바꾼다
    // setTime(6) --> time = 6 그리고 상태가 될때마다 다시 렌더링 된다

    return (
        <aside css={S.layout(isShow)}>
            {/* div 아닌이유 = aside 는 사이드 바 사용하려고 */}
            {/* layout(isShow) layout의 기본 모습이 isShow */}
            <button css={S.toggleButton} onClick={() => setShow(!isShow)}>
                {/*onClick 안에는 함수 (매개변수) => 본문(setShow(바꾸고싶은))  */}
                {/* !isShow = isShow는 false(기본 들어가있음) 누를때마다  */}
                {/* isShow의 상태가 바뀌어서 들어갔다 나왔다. */}
                {isShow ?<DiApple /> : <AiFillAndroid />} 
                </button>
                 <ul css={S.menuList}>
                    {MENUS.map(menu => //매개변수 이름 
                        <Link 
                            css={S.menuItem}
                            to={menu.path}
                            key={menu.id}
                            onClick={() => setShow(false)}>
                                <li>{menu.name}</li>
                        </Link>)}
                         {/* id:1, path:"/mypage", name: "마이페이지", element: <Mypage />
                         이렇게 menu에 객체로 저장 */}
                 </ul> 
        </aside>
    );
}

export default SideBar;