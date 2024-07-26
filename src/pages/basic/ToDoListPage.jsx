import React, { useState } from 'react';
import AllToDoList from '../../components/AllToDoList/AllToDoList';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from '../../components/Header/Header';

const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;

`;

function ToDoListPage(props) {
    const [ state, setState ] = useState(0);
    const [ isChecked, setIsChecked ] = useState(false);
    const [ allTodolist, setAlltodoList ] = useState([]);

    return (
        <>
            <Header />
            <div css={layout}>
                <AllToDoList />
                <AllToDoList />
                <AllToDoList />
            </div>
        </>
        
    );
}

export default ToDoListPage;