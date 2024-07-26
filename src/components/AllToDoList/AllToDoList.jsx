import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import axios from 'axios';

function AllToDoList(props) {
    const [ registerToDoList, setRegisterToDoList ] = useState({
        content: "",
        registerDate: "",
        checkedState: 0
    })

    const handleInputChange = (e) => {
        setRegisterToDoList(todolist => {
            return {
                ...registerToDoList,
                [e.target.name]: e.target.value
            }
        })
    }

    const requestComputerList = () => {
        
    }

    const handleRegisterClick = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/v1/todolist", registerToDoList)
            console.log(response.data);
        } catch(e) {
            console.error(e);
        }
        setRegisterToDoList({
            content: "",
            registerDate: "",
            checkedState: 0
        })
    }


    return (
        <div css={s.container}>
            <h1 css={s.title}>TODO LIST</h1>
            <div css={s.inputbox}>
                <input type="text" css={s.todoinput} name="content" onChange={handleInputChange} value={registerToDoList.content}/>
                <input type="month" css={s.todoinput} name="registerDate" onChange={handleInputChange} value={registerToDoList.registerDate}/>
                <button css={s.button} onClick={handleRegisterClick}>확인</button>
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