import React from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import NavbarNotatHomePage from '../../components/NavNotAtHomePage';
import { useNavigate } from 'react-router-dom';

function AddData({className}) {

    const navigate = useNavigate();

    function backToHome(){
        navigate('/Homepage')
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
                        <input type="text" className="form-control" id="fname" placeholder="ชื่อจริง" />
                    </div>
                    <div className="input-right">
                        <label htmlFor="lname">นามสกุล Username</label>
                        <input type="text" className="form-control" id="lname" placeholder="นามสกุล" />
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-left">
                        <label htmlFor="age">อายุ</label>
                        <input type="text" className="form-control" id="age" placeholder="อายุ" />
                    </div>
                    <div className="input-right">
                        <label htmlFor="national">สัญชาติ</label>
                        <input type="text" className="form-control" id="national" placeholder="สัญชาติ" />
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-left">
                        <label htmlFor="causeOfdeath">สาเหตุการตาย</label>
                        <input type="text" className="form-control" id="causeOfdeath" placeholder="สาเหตุการตาย" />
                    </div>
                    <div className="input-right">
                        <label htmlFor="place">สถานที่ตาย</label>
                        <input type="text" className="form-control" id="place" placeholder="สถานที่ตาย" />
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-left">
                        <label htmlFor="sin">คะแนนความชั่ว</label>
                        <input type="text" className="form-control" id="sin" placeholder="คะแนนความชั่ว" />
                    </div>
                    <div className="input-right">
                        <label htmlFor="kumnalok">ขุมนรก</label>
                        <input type="text" className="form-control" id="kumnalok" placeholder="ขุมนรก" />
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-left">
                        <label htmlFor="howlong">ระยะเวลาชดใช้กรรม</label>
                        <input type="text" className="form-control" id="howlong" placeholder="ระยะเวลาชดใช้กรรม" />
                    </div>
                    <div className="input-right">
                        <label htmlFor="warden">ผู้คุม</label>
                        <input type="text" className="form-control" id="warden" placeholder="ผู้คุม" />
                    </div>
                </div>
        </div>
            <div className='button_zone'>
                <button className='btn_Back'onClick={backToHome}><i class="fa-solid fa-caret-left"></i> ย้อนกลับ</button>
                <button className='btn_Add' ><i class="fa-solid fa-user-plus"></i> เพิ่มข้อมูล</button>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default styled(AddData)`

background-color: #2D2A2A;
height: 100vh;
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
    height: 500px;
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