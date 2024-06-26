import './header.css'

import { Link } from 'react-router-dom'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';

export default function Header() {

   
    
    
    return (
        <div className='contenedor'>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <img src='mc.gif' className='logo' alt=''/>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            <li className="nav-item">
                            <ArticleIcon/>
                              <Link to="/datos">
                                <a className="nav-link" href="#">Glosario</a>
                                </Link>
                            </li>

                            

                            
                          
                        </ul>
                         
                        
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}
