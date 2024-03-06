/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";


const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const imageLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid #dbdbdb;
    width: 300px;
    height: 300px;
    overflow: hidden;
    & > img {
        width: 100%;
    }
`;

function ImageEx2() {
    
    cosnt[ oldFiles, setOldFiles ] = useState([]);
    //초기값 빈 배열 - 파일 추가하면 배열에 쌓인다
    cosnt[ newFiles, setNewFiles ] = useState([]);

    return (
        <div css={layout}>
            {oldFiles?.map(file =>
                <div css={imageLayout} key={file.id}>
                    <img src={file.url} alt="" />
                </div>)}
        </div>
    );
}

export default ImageEx2;