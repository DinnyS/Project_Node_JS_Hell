import React , { useState } from 'react'
import styled from 'styled-components'
import Logo from '../../assets/img/WelcomeToHellLogo.png'
import check from './login_repository'
import { useNavigate } from 'react-router-dom';

function Login({className}) {

    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const navigate = useNavigate();


    const handleLogin = () => {
        const user = check(username, password);
    
        if (user) {
            navigate('/Homepage');
        } else {
          alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
        }
    }


  return (
    <>
        <div className={className}>
            <div className="container">
                <div class="center-container">
                <img className='logoHell' src={Logo} alt="My Hell Logo" />
                <form class="login-form">
                    <h2 className='header_login'>Angels Login</h2>
                    <div className="username_container">
                        {/* <label  className="form-label">Username</label> */}
                        <input type="text" className="form-control" id="inputUsername" placeholder="Angels Username :" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="password_container">
                        {/* <label  className="form-label">Password</label> */}
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="login_btn" onClick={handleLogin}>Login</button>
                </form>
                </div>
            </div>
        </div>    
    </>
  )
}

export default styled(Login)`

background-color: #2D2A2A;

.container {
    height: 100vh;
    display: flex;
    justify-content: center; 
    align-items: center; 
    background-color: #2D2A2A;
}

.center-container {
    color: white;
    display: flex;
    text-align: center;
    align-items: center;
    width: 800px;
    height: 400px;
    /* background-color: #CC2F37; */
    border-radius: 10px;
}

.logoHell{
    max-width: 350px;
    filter: saturate(150%);
}


.login-form {
    width: 500px;
    height: 300px;
    margin: 0 auto; 

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.header_login{
    font-size: 36px;
    font-weight: bold;
    text-shadow: #CC2F37 2px 2px 2px;
}

.form-label{
    display: flex;
    justify-content: start;
}

.form-control{
    width: 350px;
}

.username_container{
    margin-top: 40px;
    margin-bottom: 20px;
}

.password_container{
    margin-top: 20px;
    margin-bottom: 50px;
}

.login_btn{
    color: black;
    font-weight: bold;
    background-color: #D9D9D9;
    height: 50px;
    width: 200px;
    border-radius: 10px;
    transition: 300ms;
}

.login_btn:hover{
    /* background-color: #66BC22; */
    background-color: #a9a9a9;
    transition: 300ms;
}




`