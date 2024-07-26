import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function Header(props) {
    return (
        <div css={s.layout}> 
            <h2>To Do List</h2>
            <div>
                <button>로그인</button>
                <button>회원가입</button>
                {/* {}나눠서 로그인시 출력되는 버튼 다르게 하기(id값으로 처리) */}
                <button>마이페이지</button>
                <button>로그아웃</button>

            </div>

        </div>
    );
}

export default Header;