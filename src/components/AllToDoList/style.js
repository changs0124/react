import { css } from "@emotion/react";

export const container = css`
    box-sizing: border-box;
    margin: 50px 10px;
    border: 1px solid #dbdbdb;
    padding: 20px;
    width: 400px;
    height: 700px;
    background-color: white;
`;

export const inputbox = css`
     display: flex;
     justify-content: space-between;
`;

export const title = css`
     display: flex;
    justify-content: center;
    margin-bottom: 50px;
    cursor: default;
`;

export const todoinput = css`
    flex-grow: 1;
    outline: none;
    border: 1px solid #dbdbdb;
    padding: 5px 10px;
    height: 30px;
    font-size: 16px;    
    cursor: pointer;
`; 
export const button = css`
    margin-left: 5px;
    border: 1px solid #dbdbdb;
    padding: 5px 10px;
    background-color: white;
    font-size: 12px;
    font-weight: 600;
    color: #555555;
    cursor: pointer;
    /* & : 자기 자신 */
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #eeeeee;
    }
`;
export const todocontainer = css`
    box-sizing: border-box;
    margin-top: 10px;
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 100%;
    height: 480px;
`;
export const todolistcontainer = css`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    list-style-type: none;
    /* 스크롤바 숨김 */
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`; 
export const todocard = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-bottom: 10px;
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 100%;
    height: 100px;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 4px #00000022 inset;
    }
`;
export const tododate = css`
     margin: 0;
     font-size: 13px;
`; 
export const todocontent = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    flex-grow: 1;
    font-size: 14px;
`;
export const todobuttons = css`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    & > button {
        margin-left: 5px;
    }
`;
export const modal = css`
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #00000066;
`;
export const modalshow = css`
    display: flex;
`;
export const modaleditcontainer = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    padding: 20px;
    width: 360px;
    height: 200px;
    background-color: white;
`; 
export const modaltitle = css`
    margin: 0;
    font-size: 18px;
    cursor: default;
`;