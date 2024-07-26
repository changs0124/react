import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function AllToDoList(props) {
    return (
        <div css={s.container}>
            <h1 css={s.title}>TODO LIST</h1>
            <div css={s.inputbox}>
                <input type="text" css={s.todoinput} name="todo-content"/>
                <button css={s.button}>확인</button>
            </div>
            <div css={s.todocontainer}>
                {/* <ul css={s.todolistcontainer}>
                    <li css={s.todocard}>
                    <h3 css={s.tododate}>2024-06-18 12:39</h3>
                    <p css={s.todocontent}>오늘 할 일</p>
                    <div css={s.todobuttons}>
                        <button css={s.button}>수정</button>
                        <button css={s.button}>삭제</button>
                    </div>
                    </li>
                </ul> */}
            </div>
        </div>
    );
}

export default AllToDoList;