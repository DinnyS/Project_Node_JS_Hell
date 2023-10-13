import React , { useState , useEffect } from 'react'
import  Navbar  from '../../components/Navbar/index';
import styled from 'styled-components';

// import dataUser from '../../model/data.json'

import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
// import { getDataById } from '../../model/peopleController';
import { setIdperson } from '../../model/peopleController';
import { getKeyword } from '../../model/peopleController';
import { filterDataByFname } from '../../model/peopleController';
import { filterDataByHell } from '../../model/peopleController';
import { getTheHell } from '../../model/peopleController';


function FilterData({className}) {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Fetch data when the component mounts
    filterDataByFname('peoples', getKeyword()) // Replace with your desired endpoint
      .then((result) => {
        console.log(getKeyword())
        setData(result);
      })
      .catch((error) => {
        console.error(error);
      });

      filterDataByHell( getTheHell()) // Replace with your desired endpoint
      .then((result) => {
        console.log(getTheHell())
        setData(result);
      })
      .catch((error) => {
        console.error(error);
      });
      

  }, []);

  




  const navigate = useNavigate();


  function goTOAddData(){
    navigate('/AddData');
  }

  // const [nowId,setId] = useState('')


  function goTOProfilebyID(id){
    setIdperson(id)
    // nowId = id
    navigate(`/Profile`);
    
  }

  const itemsPerPage = 8; 
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);


  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <>
    <Navbar/>
      <div className={className}>
        
        <div className='table_Container'>
          <h1 className='welcome_header'>Filter Result</h1>
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


            {data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item) => (
              <tr key={item.id} onClick={() => goTOProfilebyID(item.id)}>
                <td key={item.id}>{item.id}</td>
                <td key={item.id}>{item.fname}</td>
                <td key={item.id}>{item.lname}</td>
                <td key={item.id}>{item.hell}</td>
              </tr>
                ))}
          
          </tbody>
        </table>
      </div>

        <div className='page_btn-container'>
          {pageNumbers.map((page) => (
            <button className='page_btn' key={page} onClick={() => handlePageChange(page)}>
              {page}
            </button>
          ))}
        </div>

        <div className='add_btn_container'>
          <button className='add_data_btn' onClick={goTOAddData}><i class="fa-solid fa-user-plus"></i> เพิ่มผู้ตกนรก +</button>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default styled(FilterData)`

background-color: #2D2A2A;
height: 130vh;
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


.button_Zone_map{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 30px 0;
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

.page_btn-container{
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
}

.page_btn{
  width: 40px;
  height: 40px;
  margin: 0 5px 0 5px;
  font-weight: bold;
  background-color: #FCFCFC ;
  border-radius: 25px;
  border: solid 1px #FCFCFC;

  transition: 300ms;
}

.page_btn:hover{
  background-color: #CC2F37;
  color: #FFF;
  border: solid 1px #CC2F37;
  transition: 300ms;
}



`