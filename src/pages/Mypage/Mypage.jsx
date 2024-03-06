/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import *as S from "./style";

function Mypage() {

    const imgFileRef = useRef();
    const [ preview, setPreview ] = useState("");

    const handleImgFileChange =(e) => {
        const fileReader = new FileReader();
        // 이벤트가 일어나면(콜백함수) new fileReder 생성

        if(e.target.files.length === 0 ) {
            return;
        }
        //e.target = 이벤트 발생 요소
        //files = 파일 입력 필드에서 선택된 파일 목록을 나타냄
        //length = 선택된 파일의 수를 나타내는 속성.

        fileReader.onload =(e) => { // 함수정의 - 함수 호출을 했을때 정의가 안되어있으면 말짱도루묵
            //객체가 생성되면?
            setPreview(e.target.result);
            // setPreview(바꾸고싶은)
        };
        // fileReader 가 onload(로딩 완료)이 되었을때 실행 되는 콜백함수
        // setPreview = 상태를 변경한다 (e.target.result) 는 파일의 내용을 나타냄
        // result = 객체가 읽어들인 데이터의 내용을 나타내는 속성
        // 이미지 까지 넣으면 재 랜더링
        fileReader.readAsDataURL(e.target.files[0]); // 함수 호출= 호출 돼야 정의 실행
        // readAsDataURL = fileReader 객체 지정된 파일을 읽고 파일내용을DataUrl형식으로 반환
        // e.target.files[0] = <input> 요소에서 선택된 첫 번째 파일을 나타냄
        // . readAsDataURL() 메서드는 파일의 내용을 읽어들이기 위해 이 파일을 사용
    }

    
    return (
        <div css={S.layout}>
            <div css ={S.profileHeader}>
                <h1 css={S.title}>마이페이지</h1>
                <div css={S.profileImg} onClick={() => imgFileRef.current.click()}>
                    {/*  profileImg 클릭이 일어났을때  input (감싸고있다) 이 작업된거*/}
                    <img src={preview} alt="" />
                    <input style={{display:"none"}} type="file" ref={imgFileRef} onChange={handleImgFileChange} />
                    {/*ref={imgFileRef}  */}
                </div>
            <div css={S.nicknameLayout}>
                <input css={S.nickname} type="text" maxLength={20}/>

            </div>
        </div>
       
            <div css={S.profileInputLayout}>
                <div css ={S.inputBox}>
                <input css={S.profileInput} id="name" type="text" placeholder=" " />
                <label htmlFor="name">성명</label>
                </div>
                <div css ={S.inputBox}>
                <input css={S.profileInput} id="birth" type="text" placeholder=" " />
                <label htmlFor="birth">생년월일</label>
                </div>
                <div css ={S.inputBox}>
                <input css={S.profileInput} id="phone" type="text" placeholder=" " />
                <label htmlFor="phone">연락처</label>
                </div>
                <div css ={S.inputBox}>
                <input css={S.profileInput} id="address" type="text" placeholder=" " />
                <label htmlFor="address">주소</label>
                </div>
            </div>
            <div css={S.buttonLayout}>
                    <button css={S.profileButton}>수정하기</button>
            </div>
        </div>
    );
}

export default Mypage;