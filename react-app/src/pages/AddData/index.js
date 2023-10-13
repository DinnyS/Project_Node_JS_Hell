import React , { useState } from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import NavbarNotatHomePage from '../../components/NavNotAtHomePage';
import { useNavigate } from 'react-router-dom';
import { addData } from '../../model/peopleController';

import Swal from 'sweetalert2'



function AddData({className}) {

    const navigate = useNavigate();

   

    const [isFormValid, setIsFormValid] = useState(true);


    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [age, setAge] = useState('');
    const [nationality, setNational] = useState('');
    const [causeOfdeath, setCauseOfdeath] = useState('');
    const [place, setPlace] = useState('');
    const [sin, setSin] = useState('');
    const [hell, setHell] = useState('');
    const [time, setHowlong] = useState('');
    const [warden, setWarden] = useState('');
    const [deathday, setDeathday] = useState('');

  function backToHome() {
    navigate('/Homepage');
  }

  async function add_data_na(theData) {
 
    

    try {
      const addedData = await addData('peoples', theData);
      console.log('Data added:', addedData);
    } catch (error) {
      console.error('Failed to add data:', error);
    }
  }

  function checkadd(){
    Swal.fire({
        title: 'แน่ใจรึ?',
        text: "กรุณาตรวจสอบข้อมูลให้ครบถ้วน!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ข้อมูลแม่นล้าา',
        cancelButtonText: 'ห๊ะ ขอกลับไปดูก่อน'
      }).then((result) => {
        if (result.isConfirmed) {
            const newData = {
                fname,
                lname,
                age,
                nationality,
                causeOfdeath,
                place,
                sin,
                hell,
                time,
                warden,
                deathday
              };
          
              if (
                  !fname ||
                  !lname ||
                  !age ||
                  !nationality ||
                  !causeOfdeath ||
                  !place ||
                  !sin ||
                  hell === '' || 
                  !time ||
                  warden === '' ||
                  !deathday
                ) {
                  setIsFormValid(false);
                  return(Swal.fire({
                      title: 'Error!',
                      text: 'กรุณาใส่ข้อมูลให้ครบถ้วน!',
                      icon: 'error',
                      confirmButtonText: 'รับทราบ'
                    })); 
                }
            add_data_na(newData)
            backToHome();
          Swal.fire(
            'เพิ่มแล้ว!',
            'เพิ่มคนลงนรกแล้ว 555',
            'สำเร็จแล้วเด้อ'
          )
        }
      })
  }
    

  return (
    <>
    <NavbarNotatHomePage/>
        <div className={className}>
        <div className='addDataContainer'>
            <h1 className='header_addData'>เพิ่มผู้ตกนรก</h1>

                <div className="input-group">
                    <div className="input-left">
                        <label htmlFor="fname">ชื่อจริง</label>
                        <input type="text" className="form-control" id="fname" placeholder="ชื่อจริง" value={fname} onChange={(e) => setFname(e.target.value)} />
                    </div>
                    <div className="input-right">
                        <label htmlFor="lname">นามสกุล Username</label>
                        <input type="text" className="form-control" id="lname" placeholder="นามสกุล" value={lname} onChange={(e) => setLname(e.target.value)}/>
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-left">
                        <label htmlFor="age">อายุ</label>
                        <input type="text" className="form-control" id="age" placeholder="อายุ" value={age} onChange={(e) => setAge(e.target.value)}/>
                    </div>
                    <div className="input-right">
                        <label htmlFor="national">สัญชาติ</label>
                        <input type="text" className="form-control" id="national" placeholder="สัญชาติ" value={nationality} onChange={(e) => setNational(e.target.value)}/>
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-left">
                        <label htmlFor="causeOfdeath">สาเหตุการตาย</label>
                        <input type="text" className="form-control" id="causeOfdeath" placeholder="สาเหตุการตาย" value={causeOfdeath} onChange={(e) => setCauseOfdeath(e.target.value)}/>
                    </div>
                    <div className="input-right">
                        <label htmlFor="place">สถานที่ตาย</label>
                        <input type="text" className="form-control" id="place" placeholder="สถานที่ตาย" value={place} onChange={(e) => setPlace(e.target.value)}/>
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-left">
                        <label htmlFor="sin">คะแนนความชั่ว</label>
                        <input type="text" className="form-control" id="sin" placeholder="คะแนนความชั่ว" value={sin} onChange={(e) => setSin(e.target.value)}/>
                    </div>
                    <div className="input-right">
                        <label htmlFor="kumnalok">ขุมนรก</label>
                        <select className="form-control" id="kumnalok" value={hell} onChange={(e) => setHell(e.target.value)}>
                            <option value="" disabled selected>กรุณาเลือก ขุมนรก</option>
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

                <div className="input-group">
                    <div className="input-left">
                        <label htmlFor="howlong">ระยะเวลาชดใช้กรรม</label>
                        <input type="text" className="form-control" id="howlong" placeholder="ระยะเวลาชดใช้กรรม" value={time} onChange={(e) => setHowlong(e.target.value)}/>
                    </div>
                    <div className="input-right">
                        <label htmlFor="warden">ผู้คุม</label>
                        <select className="form-control" id="warden" value={warden} onChange={(e) => setWarden(e.target.value)}>
                            <option value="" disabled selected>กรุณาเลือก ผู้คุม</option>
                            <option value="ป่าปรีรันย่า">ป่าปรีรันย่า</option>
                            <option value="หวังเป่าฮื้อ">หวังเป่าฮื้อ</option>
                            <option value="ไต">ไต</option>
                            <option value="แม่มมม">แม่มมม</option>
                            <option value="ไพท่อน">ไพท่อน</option>
                            <option value="คลายเคลียด">คลายเคลียด</option>
                            <option value="ก้อต้องเดินจากไป">ก้อต้องเดินจากไป</option>
                            <option value="ม่ายนอนๆ">ม่ายนอนๆ</option>
                        </select>
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-left">
                        <label htmlFor="causeOfdeath">วันที่ตุย</label>
                        <input type="text" className="form-control" id="deathday" placeholder="วันที่มรณะ" value={deathday} onChange={(e) => setDeathday(e.target.value)}/>
                    </div>
                   
                </div>

        </div>
            <div className='button_zone'>
                <button className='btn_Back'onClick={backToHome}><i class="fa-solid fa-caret-left"></i> ย้อนกลับ</button>
                <button className='btn_Add' onClick={checkadd}><i class="fa-solid fa-user-plus"></i> เพิ่มข้อมูล</button>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default styled(AddData)`

background-color: #2D2A2A;
height: 120vh;
padding-top: 100px;

.header_addData{
    margin-bottom: 30px;
}

.input-group{
    justify-content: center;
    margin-top: 10px;
}

.input-left{
    margin-right: 20px;
}

.input-right{
    margin-left: 20px;
}

.addDataContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 60%;
    height: 600px;
    background-color: #FCFCFC;
    margin: 0 auto;

    border-radius: 50px;
}

.form-control{
    width: 350px;
}

.button_zone{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
}

.btn_Back{
    width: 250px;
    height: 40px;
    border-radius: 12px;
    margin-right: 10px;
    background-color: #a9a9a9;
    transition: 300ms;
}

.btn_Back:hover{
    background-color: #d9d9d9;
    transition: 300ms;
}

.btn_Add{
    width: 250px;
    height: 40px;
    border-radius: 12px;
    margin-left: 10px;
    background-color: #4D7B29;
    color: #FFF;
    transition: 300ms;
}

.btn_Add:hover{
    background-color: #66BC22;
    color: #FFF;
    transition: 300ms;
}


`