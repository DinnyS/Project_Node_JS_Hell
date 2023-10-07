import React , { useState } from 'react'
import  Navbar  from '../../components/Navbar/index';
import styled from 'styled-components';
import dataUser from '../../model/data.json'
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';


function Homepage({className}) {

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1); // หน้าปัจจุบัน
  const itemsPerPage = 5; // จำนวนข้อมูลต่อหน้า

  // คำนวณหน้าตามข้อมูลทั้งหมดและหน้าปัจจุบัน
  const totalPages = Math.ceil(dataUser.length / itemsPerPage);

  // ดึงข้อมูลที่ต้องการแสดงบนหน้าปัจจุบัน
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = dataUser.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  function goTOAddData(){
    navigate('/AddData');
  }

  return (
    <>
    <Navbar/>
      <div className={className}>
        
        <div className='table_Container'>
          <h1 className='welcome_header'>Welcome to NaRok</h1>
          <hr className='taiheader'></hr>
          <table className="table">
          <thead className='headerTable_Zone'>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">ชื่อ</th>
              <th scope="col">นามสกุล</th>
              <th scope="col">ขุมนรก</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>8</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>7</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>5</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>5</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>5</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>5</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>5</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>5</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>5</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>5</td>
            </tr>
          
          </tbody>
        </table>
      </div>

        <div className='button_Zone_map'>
          <button onClick={prevPage} disabled={currentPage === 1}>
            หน้าก่อนหน้า
          </button>
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            หน้าถัดไป
          </button>
        </div>
        <div className='add_btn_container'>
          <button className='add_data_btn' onClick={goTOAddData}><i class="fa-solid fa-user-plus"></i> เพิ่มผู้ตกนรก +</button>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default styled(Homepage)`

background-color: #2D2A2A;
height: 120vh;
padding-top: 100px;

.table_Container{
  
  width: 80%;
  margin: 0 auto;
  background-color: #FCFCFC;
  text-align: center;
  padding: 30px;

  border-radius: 50px;
}

.welcome_header{
  font-weight: bold;
  color: #2D2A2A;
}

.taiheader{
  border-width: 30px;
  margin-left: -30px;
  margin-right: -30px;
  border-color: #2D2A2A;
  opacity: 1;
}

.headerTable_Zone{
  border-bottom: solid 5px #2D2A2A;
}




.add_btn_container{

  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  bottom: 10px;
}


.add_data_btn{
  width: 600px;
  height: 50px;
  color: #FFF;
  font-size: 20px;
  background-color: #4D7B29;
  border-radius: 25px;
  transition: 300ms;
}

.add_data_btn:hover{
  background-color: #66BC22;
  color: #FFF;
  transition: 300ms;
}




`