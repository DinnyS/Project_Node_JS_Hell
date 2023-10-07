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

                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">Action</a></li>
                                        <li><a className="dropdown-item" href="/">Another action</a></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
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