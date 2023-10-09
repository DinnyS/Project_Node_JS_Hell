import React from 'react';
import styled from 'styled-components';



export function Navbar({className}){
    


    return(
        <>
            <div className={className}>
                <div className='navbar_header'>
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            
                            <div className="profile" href="/"></div>

                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="buttonSearch" type="submit">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </form>

                            <div className="dropdown">
                                <select className='dropdownBox'>
                                    <option value="option1">ขุม 1 : ป่ามรณะ</option>
                                    <option value="option2">ขุม 2 : ปราสาทแห่งความหวัง</option>
                                    <option value="option3">ขุม 3 : หวานแต่เค็ม</option>
                                    <option value="option4">ขุม 4 : ศาลาความหวาดกลัว</option>
                                    <option value="option1">ขุม 5 : แม่น้ำสีชาด</option>
                                    <option value="option2">ขุม 6 : ปีศาจกระหายน้ำตา</option>
                                    <option value="option3">ขุม 7 : คนไม่จำเป็น</option>
                                    <option value="option4">ขุม 8 : เสียงกรีดร้องของเวลา</option>
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