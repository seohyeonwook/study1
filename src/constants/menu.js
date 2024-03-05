import Mypage from "../pages/Mypage/Mypage";

export const MENUS = [ // 객체를 배열로 저장
    {
        id:1,
        path:"/mypage",
        name: "마이페이지",
        element: <Mypage />
    },
    {
        id: 2,
        path: "/board",
        name: "게시판",
        element: <>게시판</>
    },
    {
        id: 3,
        path: "/notice",
        name: "공지사항",
        element: <>공지사항</>
    },
]