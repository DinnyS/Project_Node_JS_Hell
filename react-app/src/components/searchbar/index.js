import React , { useState } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

function searchbar({classname}){
    const [input, setInput] = useState("");

    const handleChange = (value) => {
        setInput(value);
        fetchSearch(value);
      };




    return(
        <>
            <div className={classname}>
                <input
                placeholder="Search Name..."
                id="searchbar"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                ></input>
            </div>
        </>
    )
}


export default styled(searchbar)`
    height: 40px;




`


