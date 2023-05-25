import React, { useRef } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = ({handleSearch}) => {
    const inptRef=useRef(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        handleSearch(inptRef.current.value);
    }
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark shadow-lg fixed-top p-3">
        <div class="container-lg container-fluid">
            <a class="navbar-brand text-white" href="#"><h3 className='logo'>Resturant</h3></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} className='bar-icon'/>
            </button>
            <div class="collapse navbar-collapse my-lg-1 my-md-4 my-4" id="navbarSupportedContent">
                <form class="d-flex ms-auto ">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                    onChange={(e)=>handleSearch(e.target.value)} ref={inptRef}
                    />
                    <button class="btn btn-outline-warning" type="submit"
                    onClick={handleSubmit}
                    >Search</button>
                </form>
            </div>
        </div>
    </nav>
  )
}
export default Header;
