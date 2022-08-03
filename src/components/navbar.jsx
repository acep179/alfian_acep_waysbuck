import { React } from "react"
import {Link} from 'react-router-dom'

// import Login from "./login"
import Register from "./Register"

import logo from "../assets/waysbuck_logo.png"
import iconCart from "./../assets/cart_icon.png"
import userPhoto from "./../assets/user_photo.png"
import userIcon from "./../assets/user_icon.png"
import logoutIcon from "./../assets/logout_icon.png"


function Navbar(){

let isLogin = false
let isAdmin = true

    return(
        <div className="Navbar fixed-top">
            
            {/* Modals */}
            {/* Login */}
            {/* <Login/> */}
            {/* <div className="modal fade" id="login" aria-hidden="true" aria-labelledby="loginModal" tab-index="-1">
                <div className="modal-dialog modal-dialog-centered" style={{width: 450}}>
                    <div className="modal-content">
                    <div className="modal-body">
                        <h1 className="modal-title text-red bold mb-4" id="login">Login</h1>
                        <form>
                            <div className="mb-3">
                            <input type="email" className="form-control input-red" id="email"name="email" placeholder="Email" />
                            </div>
                            <div className="mb-3">
                            <input type="password" className="form-control input-red" id="password"name="password" placeholder="Password" />
                            </div>
                            <div className="d-grid gap-2 mb-3">
                            <button className="btn btn-red" type="button">Login</button>
                            </div>
                        </form>
                        <p className="text-center" >Don't have an account? Click <strong className="cursor-pointer" data-bs-target="#register" data-bs-toggle="modal">Here</strong></p>
                    </div>
                    </div>
                </div>
            </div> */}

            {/* Register */}
            <Register/>
            
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-lg">
                    <a className="navbar-brand me-5" href="/">
                        <img src={logo} style={{height: 60}} alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon bg-pink"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {isLogin ? (
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 position-relative d-flex align-items-center">
                                    <li className="nav-item cursor-pointer">
                                        <img src={iconCart} alt="cart" />
                                    </li>

                                    <li>
                                        <div className="rounded-circle nav-photo ms-3" style={{backgroundImage: `url(${userPhoto})`}}>
                                            {isAdmin ? (
                                                <div className="menu-drop" style={{width: 300}}>

                                                    <div>
                                                        <Link to='add-product' className="d-flex align-items-center p-3">
                                                            <img src={userIcon} alt="profile icon" />
                                                            <p className="ms-3">Add Product</p>
                                                        </Link>
                                                        <Link to='add-topping' className="d-flex align-items-center p-3">
                                                            <img src={userIcon} alt="profile icon" />
                                                            <p className="ms-3">Add Topping</p>
                                                        </Link>
                                                    </div>

                                                    <p className="d-flex align-items-center p-3">
                                                        <img src={logoutIcon} alt="logout icon" />
                                                        <p className="ms-3">Logout</p>
                                                    </p>

                                                </div>
                                            ) : (
                                                <div className="menu-drop">
                                                    <div>
                                                        <Link to='profile' className="d-flex align-items-center p-3">
                                                            <img src={userIcon} alt="profile icon" />
                                                            <p className="ms-3">Profile</p>
                                                        </Link>
                                                    </div>
                                                    <p className="d-flex align-items-center p-3">
                                                        <img src={logoutIcon} alt="logout icon" />
                                                        <p className="ms-3">Logout</p>
                                                    </p>
                                                    
                                                </div>
                                
                                            )}


                                        </div>
                                    </li>
                                </ul>
                            ) : (
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <button type="button" className="btn btn-reverse-red px-4 py-1" data-bs-toggle="modal" data-bs-target="#login">
                                        Login
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn btn-red ms-3 px-4 py-1" data-bs-toggle="modal" data-bs-target="#register">
                                        Register
                                    </button> 
                                </li>


<div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1" style={{zIndex: 99}}>
<div className="modal-dialog modal-dialog-centered">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalToggleLabel">Modal 100</h5>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
      Show a second modal and hide this one with the button below.
    </div>
    <div className="modal-footer">
      <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
    </div>
  </div>
</div>
</div>
<div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
<div className="modal-dialog modal-dialog-centered">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
      Hide this modal and show the first with the button below.
    </div>
    <div className="modal-footer">
      <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
    </div>
  </div>
</div>
</div>
<a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a>

                            </ul>




                            )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;