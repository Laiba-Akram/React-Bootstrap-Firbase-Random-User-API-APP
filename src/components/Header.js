import { useUserAuth } from "../context/UserAuthContext";
import { Button } from "react-bootstrap";
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Header.css';
import Randomuser from "./Randomuser";
const Header = () => { 
    const [toggleMenu, setToggleMenu] = useState(false);
    const {user,logOut} = useUserAuth();
    console.log(user);
    const handleLogOut = async () => {
        try {
          await logOut();
        }catch(err){
          console.log(err.message);
        }
      };
      return (
        <div className="gpt3__navbar">
          <div className="gpt3__navbar-links">
            <div className="gpt3__navbar-links_logo">
            Laiba
            </div>
            <div className="gpt3__navbar-links_container">
              <p><a href="#home">Home</a></p>
              <p><a href="#Randomuser">Randomuser</a></p>
            </div>
          </div>
          <div className="gpt3__navbar-sign">
           <p><a href="#email">{user && user.email}</a></p>
           <Button variant="primary" className='btn btn-sm'
             onClick={handleLogOut} >LogOut</Button>
          </div>
          <div className="gpt3__navbar-menu bg-dark">
            {toggleMenu
              ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
              : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center bg-dark">
              <div className="gpt3__navbar-menu_container-links">
                <p><a href="#home">Home</a></p>
                <p><a href="#Randomuser">Randomuser</a></p>
              </div>
              <div className="gpt3__navbar-menu_container-links-sign">
               <p><a href="#email">{user && user.email}</a></p>
               <Button variant="primary" className='btn btn-sm'
             onClick={handleLogOut} >LogOut</Button>
              </div>
            </div>
            )}
          </div>
        </div>
      );
    };

export default Header;















