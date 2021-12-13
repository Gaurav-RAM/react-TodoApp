import React from 'react';
import '../assets/css/myStyle.css'

 function Header(props) {
    return (
        <div  className="header">
            <div>{props.name}</div>
        </div>
    )
}

export default Header;