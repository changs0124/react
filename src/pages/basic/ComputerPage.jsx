import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import ReactModal from 'react-modal';
ReactModal.setAppElement("#root");

const layout = css`
    box-sizing: border-box;
    margin-bottom: 20px;
    border-bottom: 2px solid #dbdbdb;
`;


function ComputerPage(props) {
    const [ registerComputer, setRegisterComputer ] = useState({
        company: "",
        cpu: "",
        ram: "",
        ssd: ""
    })

    const [ updateComputer, setUpdateComputer ] = useState({
        computerId: "",
        company: "",
        cpu: "",
        ram: "",
        ssd: ""
    })

    const [ params, setParams ] = useState({
        company: "",
        cpu: ""
    })
    const [ computerLsit, setComputerList ] = useState([]);
    const [ computerDetail, setComputerDetail ] = useState({
        computerId: "",
        company: "",
        cpu: "",
        ram: "",
        ssd: ""
    });

    const [ isModalOpen, setIsModalOpen ] = useState(false); 

    const requestComputerList = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/computers", {params});
            setComputerList(response.data);
            console.log(response.data);
        } catch(error) {
            console.error(error);
        }
    }

    const handleSearchInputChange = (e) => {
        setParams(p => {
            return {
                ...p,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSearchSubmitClick = () => {
        requestComputerList();
        setParams({
            company: "",
            cpu: ""
        })
    }

    
    const handleRegisterInputChange = (e) => {
        setRegisterComputer(registerComputer => {
            return {
                ...registerComputer,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleRegisterSubmitClick = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/v1/computer", registerComputer)
            // if(response.data > 0) {
            //     alert("등록 성공")
            // } else {
            //     alert("등록 실패")
            // }
            if(response === 200) {
                alert("등록 성공")
            }
        } catch(error) {
            console.error(error);
            alert("등록 실패")
        }
    }

    const handleDeleteComputerClick = async (computerId) => {
        if(window.confirm("삭제하시겠습니까>")) {
            await requestDeleteComputer(computerId);
            await requestComputerList();
            alert("삭제 완료!");
        }
    }

    const requestDeleteComputer = async (computerId) => {
        let responseData = null;
        try {
            const response = await axios.delete(`http://localhost:8080/api/v1/computer/${computerId}`);
            responseData = response.data;
        } catch(e) {
            console.error(e);
        }
    }

    const handleSelectComputerClick = async (computerId) => {
        const data = await requestGetComputer(computerId);
        if(!data) {
            setComputerDetail({
                computerId: "",
                company: "",
                cpu: "",
                ram: "",
                ssd: ""
            });
            return;
        }  
        setComputerDetail(data);
    }

    const requestGetComputer = async (computerId) => {
        let responseData = null;
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/computer/${computerId}`)
            responseData = response.data;
        } catch(error) {
            console.error(error);
        }
        return responseData;
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setUpdateComputer({
            computerId: "",
            company: "",
            cpu: "",
            ram: "",
            ssd: ""
        })
    }

    const requestUpdateComputer = async () => {
        let responseData = null;
        try {
            const response = await axios.put(`http://localhost:8080/api/v1/computer/${updateComputer.computerId}`, updateComputer);
            responseData = response.data;
        } catch(e) {
            console.error(e);
        }
        return responseData;
    }

    const handleUpdateComputerClick = async (computerId) => {
        setIsModalOpen(true);
        const data = await requestGetComputer(computerId);
        setUpdateComputer(data);
    }

    const handleUpdateSubmitClick = async () => {
       await requestUpdateComputer();
       await requestComputerList();
       closeModal();
    }

    const handleUpdateInputChange = (e) => {
        setUpdateComputer(uc => {
            return {
                ...uc,
                [e.target.name]: e.target.value
            }
        })
    }


    return (
        <div>
            <ReactModal
                style={{
                    content: {
                    boxSizing: 'border-box',
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    left: '50%',
                    padding: '20px',
                    width: '500px',
                    height: '500px',
                    backgroundColor: '#fafafa',
                    }
                }}
                isOpen={isModalOpen}
                onRequestClose={closeModal}
            >
                <div css={css`display: flex; flex-direction: column; justify-content: space-around; align-items:center; height: 100%;`}>
                    <h2>컴퓨터 정보 수정</h2>
                    <p><input type="text" name='computerId' onChange={handleUpdateInputChange} value={updateComputer.computerId} disabled={true}/></p>
                    <p><input type="text" name='company' placeholder='제조사' onChange={handleUpdateInputChange} value={updateComputer.company} /></p>
                    <p><input type="text" name='cpu' placeholder='CPU' onChange={handleUpdateInputChange} value={updateComputer.cpu} /></p>
                    <p><input type="text" name='ram' placeholder='RAM' onChange={handleUpdateInputChange} value={updateComputer.ram} /></p>
                    <p><input type="text" name='ssd' placeholder='SSD' onChange={handleUpdateInputChange} value={updateComputer.ssd} /></p>
                    <div>
                        <button onClick={handleUpdateSubmitClick}>확인</button>
                        <button onClick={() => closeModal()}>취소</button>
                    </div>
                </div>        
            </ReactModal>
            <div css={layout}>
                <p>
                    <input type="text" name='company' onChange={handleSearchInputChange} value={params.company} placeholder='제조사' />
                    <input type="text" name='cpu' onChange={handleSearchInputChange} value={params.cpu} placeholder='CPU' />
                    <button onClick={requestComputerList}>조회</button>
                </p>
                <h2>목록</h2>
                <table>
                    <thead>
                        <tr>
                            <th>선택</th>
                            <th>ID</th>
                            <th>제조사</th>
                            <th>수정</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        computerLsit.map(com => 
                            <tr key={com.computerId}>
                                <td><button onClick={() => handleSelectComputerClick(com.computerId)}>선택</button></td>
                                <td>{com.computerId}</td>
                                <td>{com.company}</td>
                                <td><button onClick={() => handleUpdateComputerClick(com.computerId)}>수정</button></td>
                                <td><button onClick={() => handleDeleteComputerClick(com.computerId)}>삭제</button></td>
                            </tr>
                        )
                    }
                    </tbody>
                    
                    
                </table>

            </div>
            <div css={layout}> 
                <h2>세부정보</h2>
                <ul>
                    <li>ID: {computerDetail.computerId}</li>
                    <li>제조사: {computerDetail.company}</li>
                    <li>CPU: {computerDetail.cpu}</li>
                    <li>RAM: {computerDetail.ram}</li>
                    <li>SSD: {computerDetail.ssd}</li>
                </ul>
            </div>
            <div css={layout}> 
                <h2>등록</h2>
                <p>
                    <label htmlFor="">제조사</label>
                    <input type="text" name='company' 
                    onChange={handleRegisterInputChange} value={registerComputer.company} />
                </p>
                <p>
                    <label htmlFor="">CPU</label>
                    <input type="text" name='cpu' 
                    onChange={handleRegisterInputChange} value={registerComputer.cpu} />
                </p>
                <p>
                    <label htmlFor="">RAM</label>
                    <input type="text" name='ram' 
                    onChange={handleRegisterInputChange} value={registerComputer.ram} />
                </p>
                <p>
                    <label htmlFor="">SSD</label>
                    <input type="text" name='ssd' 
                    onChange={handleRegisterInputChange} value={registerComputer.ssd} />
                </p>
                <p>
                   <button onClick={handleRegisterSubmitClick}>등록</button> 
                </p>
            </div>
        </div>
    );
}

export default ComputerPage;