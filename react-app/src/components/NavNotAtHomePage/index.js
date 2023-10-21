import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/img/WelcomeToHellLogo.png'
import { useNavigate } from 'react-router-dom';



function NavNotAtHomepage({className}){

    const navigate = useNavigate('')

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

                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}


export default styled(NavNotAtHomepage)`

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
    justify-content: start;
    align-items: center;
    margin:  0 auto;
    
}



.profile{
    width: 50px;
    height:50px;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
}


`