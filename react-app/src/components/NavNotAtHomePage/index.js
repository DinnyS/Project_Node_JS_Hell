import React from 'react';
import styled from 'styled-components';



function NavNotAtHomepage({className}){
    

    return(
        <>
            <div className={className}>
                <div className='navbar_header'>
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            
                            <div className="profile" href="/"></div>

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