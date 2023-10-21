import React , {useState , useEffect} from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import NavbarNotatHomePage from '../../components/NavNotAtHomePage';
import { useNavigate } from 'react-router-dom';
import { getDataById } from '../../model/peopleController';
import { getIdperson } from '../../model/peopleController';
import Swal from 'sweetalert2'
import { updateDataById } from '../../model/peopleController';




function EditNaja({className}) {



    const [data, setData] = useState({
        fname: '',
        lname: '',
        age: '',
        nationality: '',
        causeOfdeath: '',
        place: '',
        sin: '',
        hell: '',
        time: '',
        warden: '',
        deathday: '',
      });
    const navigate = useNavigate();

    // const [fname, setFname] = useState([data.fname]);
    // const [lname, setLname] = useState(data.lname);
    // const [age, setAge] = useState(data.age);
    // const [nationality, setNational] = useState(data.nationality);
    // const [causeOfdeath, setCauseOfdeath] = useState(data.causeOfdeath);
    // const [place, setPlace] = useState(data.place);
    // const [sin, setSin] = useState(data.sin);
    // const [hell, setHell] = useState(data.hell);
    // const [time, setHowlong] = useState(data.time);
    // const [warden, setWarden] = useState(data.warden);
    // const [deathday, setDeathday] = useState(data.deathday);


    function backToProfile() {
        navigate('/Profile');
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


      function checkEdit(){
        Swal.fire({
            title: 'แน่ใจรึ?',
            text: "กรุณาตรวจสอบข้อมูลให้ครบถ้วน!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4D7B29',
            cancelButtonColor: '#CC2F37',
            confirmButtonText: 'ข้อมูลแม่นล้าา',
            cancelButtonText: 'ห๊ะ ขอกลับไปดูก่อน'
          }).then((result) => {
            if (result.isConfirmed) {

                if (
                    data.fname === '' ||
                    data.lname === ''||
                    data.age === '' ||
                    data.nationality  === '' ||
                    data.causeOfdeath  === '' ||
                    data.place  === '' ||
                    data.sin  === '' ||
                    data.hell === '' ||
                    data.time  === '' ||
                    data.warden === '' ||
                    data.deathday === '' 
                ) {
                  Swal.fire({
                    title: 'Error!',
                    text: 'กรุณาใส่ข้อมูลให้ครบถ้วน!',
                    icon: 'error',
                    confirmButtonText: 'รับทราบ'
                  });
                  return;
                }

                edit_data_na()
                backToProfile();
              Swal.fire(
                'เรียบร้อย นะจ๊ะ!',
                'แก้ไขข้อมูลแล้วเด้อ',
                'สำเร็จแล้วเด้อ'
              )
            }
          })
      }



      async function edit_data_na() {
      
        try {
          const editedData = await updateDataById('peoples', getIdperson(), data);
          console.log('Data Edit:', editedData);
        } catch (error) {
          console.error('Failed to Edit data:', error);
        }
      }
      

  return (
    <>
    <NavbarNotatHomePage/>
        <div className={className}>
        <div className='addDataContainer'>
            <h1 className='header_addData'>ข้อมูลผู้ตกนรก</h1>

                <div className="input-group">
                    <div className="input-left">
                        <label htmlFor="fname">ชื่อจริง</label>
                        <input type="text" className="form-control" id="fname"  value={data.fname} onChange={(e) => setData({ ...data, fname: e.target.value })} />
                    </div>
                    <div className="input-right">
                        <label htmlFor="lname">นามสกุล</label>
                        <input type="text" className="form-control" id="lname" value={data.lname}  onChange={(e) => setData({ ...data, lname: e.target.value })}/>
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-left">
                        <label htmlFor="age">อายุ</label>
                        <input type="text" className="form-control" id="age" value={data.age} onChange={(e) => setData({ ...data, age: e.target.value })}/>
                    </div>
                    <div className="input-right">
                        <label htmlFor="national">สัญชาติ</label>
                        <input type="text" className="form-control" id="national" value={data.nationality} onChange={(e) => setData({ ...data, nationality: e.target.value })}/>
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-left">
                        <label htmlFor="causeOfdeath">สาเหตุการตุย</label>
                        <input type="text" className="form-control" id="causeOfdeath" value={data.causeOfdeath} onChange={(e) => setData({ ...data, causeOfdeath: e.target.value })}/>
                    </div>
                    <div className="input-right">
                        <label htmlFor="place">สถานที่ตุย</label>
                        <input type="text" className="form-control" id="place" value={data.place} onChange={(e) => setData({ ...data, place: e.target.value })}/>
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-left">
                        <label htmlFor="sin">คะแนนความชั่ว %</label>
                        <input type="text" className="form-control" id="sin" value={data.sin} onChange={(e) => setData({ ...data, sin: e.target.value })}/>
                    </div>
                    <div className="input-right">
                        <label htmlFor="kumnalok">ขุมนรก</label>
                        <select className="form-control" id="kumnalok" value={data.hell} onChange={(e) => setData({ ...data, hell: e.target.value })}>
                            <option disabled selected>กรุณาเลือก ขุมนรก</option>
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
                        <input type="text" className="form-control" id="howlong" value={data.time} onChange={(e) => setData({ ...data, time: e.target.value })}/>
                    </div>
                    <div className="input-right">
                        <label htmlFor="warden">ผู้คุม</label>
                        <select className="form-control" id="warden" value={data.warden} onChange={(e) => setData({ ...data, warden: e.target.value })}>
                            <option disabled selected>กรุณาเลือก ผู้คุม</option>
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
                        <input type="date" className="form-control" id="deathday" value={data.deathday} onChange={(e) => setData({ ...data, deathday: e.target.value })}/>
                    </div>
                   
                </div>
        </div>
        <div className='button_zone'>
                <button className='btn_Back'onClick={backToProfile}><i className="fa-solid fa-caret-left"></i> ย้อนกลับ</button>
                <button className='btn_Edit' onClick={checkEdit}><i className="fa-solid fa-pencil"></i> ยืนยันการแก้ไข</button>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default styled(EditNaja)`

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


`