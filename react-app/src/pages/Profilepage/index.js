import React , {useState , useEffect} from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import NavbarNotatHomePage from '../../components/NavNotAtHomePage';
import { useNavigate } from 'react-router-dom';
import { getDataById } from '../../model/peopleController';
import { getIdperson } from '../../model/peopleController';
import Swal from 'sweetalert2'
import { deleteDataById } from '../../model/peopleController';




function Profile({className}) {



    const [data, setData] = useState([]);
    const navigate = useNavigate();

    function backToHome() {
        navigate('/Homepage');
      }

    function editTheData() {
      navigate('/EditNaja');
    }

    function deleteData(){


        Swal.fire({
            title: 'แน่ใจรึ?',
            text: "ต้องการปลดปล่อยวิญญาณตนนี้ จริงๆรึ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ปลดปล่อย ชิ้วๆ',
            cancelButtonText: 'มั่ย'
          }).then((result) => {
            if (result.isConfirmed) {
                deleteDataById(`peoples`, getIdperson());
                backToHome();
              Swal.fire(
                'ไปเกิด!',
                'ไปเกิดได้สักที เห้ออ',
                'ไปแล้วเด้อ'
              )
            }
          })
    }


    useEffect(() => {
        console.log(getIdperson())
        getDataById('Peoples' , getIdperson()) 
          .then((result) => {
            setData(result);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);


  return (
    <>
    <NavbarNotatHomePage/>
        <div className={className}>
        <div className='addDataContainer'>
            <h1 className='header_addData'>ข้อมูลผู้ตกนรก</h1>

                <div className="input-group">
                    <div className="input-left">
                        <label htmlFor="fname">ชื่อจริง</label>
                        <label type="text" className="form-control" id="fname" placeholder="ชื่อจริง" >{data.fname}</label>
                    </div>
                    <div className="input-right">
                        <label htmlFor="lname">นามสกุล Username</label>
                        <label type="text" className="form-control" id="lname" placeholder="นามสกุล" >{data.lname}</label>
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-left">
                        <label htmlFor="age">อายุ</label>
                        <label type="text" className="form-control" id="age" placeholder="อายุ" >{data.age}</label>
                    </div>
                    <div className="input-right">
                        <label htmlFor="national">สัญชาติ</label>
                        <label type="text" className="form-control" id="national" placeholder="สัญชาติ" >{data.nationality}</label>
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-left">
                        <label htmlFor="causeOfdeath">สาเหตุการตาย</label>
                        <label type="text" className="form-control" id="causeOfdeath" placeholder="สาเหตุการตาย" >{data.causeOfdeath}</label>
                    </div>
                    <div className="input-right">
                        <label htmlFor="place">สถานที่ตาย</label>
                        <label type="text" className="form-control" id="place" placeholder="สถานที่ตาย" >{data.place}</label>
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-left">
                        <label htmlFor="sin">คะแนนความชั่ว</label>
                        <label type="text" className="form-control" id="sin" placeholder="คะแนนความชั่ว" >{data.sin}</label>
                    </div>
                    <div className="input-right">
                        <label htmlFor="kumnalok">ขุมนรก</label>
                        <label type="text" className="form-control" id="kumnalok" placeholder="ขุมนรก" >{data.hell}</label>
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-left">
                        <label htmlFor="howlong">ระยะเวลาชดใช้กรรม</label>
                        <label type="text" className="form-control" id="howlong" placeholder="ระยะเวลาชดใช้กรรม" >{data.time}</label>
                    </div>
                    <div className="input-right">
                        <label htmlFor="warden">ผู้คุม</label>
                        <label type="text" className="form-control" id="warden" placeholder="ผู้คุม" >{data.warden}</label>
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-left">
                        <label htmlFor="causeOfdeath">วันที่ตุย</label>
                        <label type="text" className="form-control" id="deathday" placeholder="วันที่มรณะ" >{data.deathday}</label>
                    </div>
                   
                </div>
        </div>
            <div className='button_zone'>
                <button className='btn_Back' onClick={backToHome}><i class="fa-solid fa-caret-left"></i> ย้อนกลับ</button>
                <button className='btn_Edit' onClick={editTheData}><i class="fa-solid fa-pencil"></i> แก้ไขข้อมูล</button>
                <button className='btn_Delete' onClick={deleteData}><i class="fa-solid fa-trash"></i> ลบข้อมูล</button>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default styled(Profile)`

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

.btn_Edit{
    width: 250px;
    height: 40px;
    border-radius: 12px;
    margin-left: 10px;
    background-color: #1258C1;
    color: #FFF;
    transition: 300ms;
}

.btn_Edit:hover{
    background-color: #1B75FD;
    color: #FFF;
    transition: 300ms;
}

.btn_Delete{
    width: 250px;
    height: 40px;
    border-radius: 12px;
    margin-left: 10px;
    background-color: #CC2F37;
    color: #FFF;
    transition: 300ms;
}

.btn_Delete:hover{
    background-color: #FF303B;
    color: #FFF;
    transition: 300ms;
}


`