import React from "react";
import "./Header.css"
const  Header = () => {

    const [active, setActive] = React.useState (false)
    const [isShow, setIsShow] = React.useState (false)

    return (
    <div className = "header">
        <img className = "logo_header" src = "./img/logo_header.jpg" />
        <nav className = "navbar">
            <p className = "title-nav" >
                About us
            </p>
            <p className = "title-nav">
                About niger
            </p>
            <p className = "title-nav">
                About burundian
            </p>
        </nav>
        
        <div className = "menu" >
            <div className = "menu" onClick= {() => setIsShow(!isShow)}>
                <div className = "line" style = {{backgroundColor: active? "white": ""}} />
                <div className = "line" style = {{backgroundColor: active? "white": ""}} />
                <div className = "line" style = {{backgroundColor: active? "white": ""}} />
            </div>
            {isShow &&(
            <div className = "dropdown">
                
                    <span className = "item"> Opzione 1 </span>
                    <span className = "item"> Opzione 2 </span>
                    <span className = "item"> Opzione 3 </span>
                
            </div>
            )}
        </div>

      
    </div>
    
    )
}


export default Header