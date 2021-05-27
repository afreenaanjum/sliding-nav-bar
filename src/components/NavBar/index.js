import { red100 } from 'material-ui/styles/colors';
import React from 'react';
import './index.css';
import { useEffect, useState } from 'react';



function NavBar(){

    const [isFloat, setFloat] = useState(false);

    function scrollEvent() {
        window.onscroll= ()=>{
            console.log(window.scrollY);
            if (window.scrollY > 60) {
                setFloat(true);
            } 
        };
    }
    //Hooks - use state and other React features without writing a class.
    useEffect(()=>{
        scrollEvent();
    },[]);

    return (
        <>
            <div className = 'nav-bar'>
                <a href="#home">Home</a>
                <a href="#news">News</a>
            </div>
            <div style={{height:'30px',width:'100%', backgroundColor:red100}}> 
            </div>
             <div className ={isFloat ? 'nav-bar pos-fixed' : 'p-0'}>
             {isFloat &&
                <>
                    <a href="#home">Home</a>
                    <a href="#news">News</a>
                </>
                }
            </div>
            
        </>
    );
}

export default NavBar;