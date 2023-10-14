import React,{useState} from 'react';
import styled from 'styled-components';
import { setKeyword } from '../../model/peopleController';
import { useNavigate } from 'react-router-dom';
import { setTheHell } from '../../model/peopleController';
import { getKeyword } from '../../model/peopleController';

import Logo from '../../assets/img/WelcomeToHellLogo.png'


export function Navbar({className}){
    
    const navigate = useNavigate();

    const [keyword, setKeywordfilter] = useState('')


    function search(){
        setKeyword(keyword)
        navigate('/Filterdata');
    }

    function filterHell(hell){
        setTheHell(hell)
        navigate('/Filterdata');
    }

    function backToHome(){
        navigate('/homepage')
    }



    return(
        <>
            <div className={className}>
                <div className='navbar_header'>
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            
                            <img className='profile' src={Logo} alt="My Hell Logo" onClick={backToHome}/>

                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setKeywordfilter(e.target.value)}/>
                                <button className="buttonSearch" type="submit" onClick={search}> 
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </form>

                            <div className="dropdown">
                                <select className='dropdownBox' onChange={(e) => filterHell(e.target.value)}>
                                    <option value="" selected>เลือกขุมนรก</option>
                                    <option value="1 ป่ามรณะ">ขุม 1 : ป่ามรณะ</option>
                                    <option value="2 ปราสาทแห่งความหวัง">ขุม 2 : ปราสาทแห่งความหวัง</option>
                                    <option value="3 หวานแต่เค็ม">ขุม 3 : หวานแต่เค็ม</option>
                                    <option value="4 ศาลาความหวาดกลัว">ขุม 4 : ศาลาความหวาดกลัว</option>
                                    <option value="5 แม่น้ำสีชาด">ขุม 5 : แม่น้ำสีชาด</option>
                                    <option value="6 ปีศาจกระหายน้ำตา">ขุม 6 : ปีศาจกระหายน้ำตา</option>
                                    <option value="7 คนไม่จำเป็น">ขุม 7 : คนไม่จำเป็น</option>
                                    <option value="8 เสียงกรีดร้องของเวลา">ขุม 8 : เสียงกรีดร้องของเวลา</option>
                                </select>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}


export default styled(Navbar)`

.navbar_header{
    width: 100vmax;
    top: 0;
    position: fixed;
    z-index: 100;
}

.navbar.navbar-expand-lg{
    background-color: #CC2F37;
    
    
}

.container-fluid{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin:  0 auto;
    
}

.d-flex{
    width: 500px;
}

.buttonSearch{
    width: 35px;
    background-color: white;
    border-radius: 10px;
    border: none;
}

.profile{
    width: 50px;
    height:50px;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
}

.dropdownBox{
    width: 250px;
    height: 35px;
    padding-left: 10px;

    border-radius: 10px;
}

option:hover{
    background-color: #CC2F37;
}






/* height: 60px;


.navbar{
    
    width: 100vmax;
    height: 60px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: red;
}

.profile_zone{
    width: 20%;
    padding-left: 50px;
}


.searchZone{
    width: 60%;
 
}

.kump{
    width: 20%;
  
} */

`