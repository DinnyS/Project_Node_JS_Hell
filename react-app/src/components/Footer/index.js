import React from 'react'
import styled from 'styled-components'

function Footer({className}) {
  return (
    <div className={className}>
    <footer className="footer_naja">
 
  <div className="container p-4">

    <div className="row">
      <div className="textZone">
        <h5 className="text-uppercase">what the hell</h5>
        <p className='leang_kuam'>
          เป็นสถานที่หลังความตุย ซึ่งผู้ที่ได้ตุยมาแล้วจะมีรายชื่ออยู่ที่นี่
          เพื่อที่จะต้องมาแก้กรรมที่เคยทำไว้เมื่อตอนยังมีชีวิตอยู่
          ซึ่งสถานที่แห่งนี้จะลงโทษผู้ที่เคยทำความผิดตาม % ความเลว
          และจะ List รายชื่อไปแต่ละขุมนรก ซึ่งขุมนรกนั้นความรุนแรงในการที่
          ต้องไปชดใช้กรรมนั้นก็แตกต่างกันไปตามสิ่งที่ผู้ตุยได้เคยก่อ
        </p>
      </div>

      
  
    </div>
  
  </div>



  <div className="text-center p-3" >© 2023 Tui Liao Ma Ni : What The Hell was that!?</div>

</footer>
</div>
  )
}



export default styled(Footer)`

background-color: #CC2F37;
color: white;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.textZone{
    width: 500px;
    text-align: center;
}

.text-uppercase{
    font-size: 26px;
}

.leang_kuam{
    font-size: 18px;
}


`
