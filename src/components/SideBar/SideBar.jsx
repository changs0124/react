import React from 'react';
import { BASIC_MENU } from '../../constants/basicMenu';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link } from 'react-router-dom';

function SideBar(props) {
    return (
        <div css={s.layout}>
            <ul css={s.list}>
                {
                    BASIC_MENU.map(menu => 
                        <Link key={menu.id} to={menu.path}>
                            <li css={s.listItem}>{menu.icon}<span css={s.itemText}>{menu.name}</span></li>
                        </Link> 
                    )
                } 
            </ul>
        </div>
    );
}

export default SideBar;