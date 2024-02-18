import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/UserAuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css'; 

const Login = () => {
    const { UserLogin } = useAuth()
    const [err, setError] = useState("")
    const [backError, setBackError] = useState("")
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const [isMenuOpen, setIsMenuOpen] = useState(false); // Define isMenuOpen state variable
    const navigate = useNavigate()

    const UserHandler = (e) => {
        const { name, value } = e.target;
        setUser((prev) => {
            return {
                ...prev,
                [name]: value
            }
        } )
    }

    const SubmitHandler = async (e) => {
        e.preventDefault()
        const { email, password } = user
        if (email == "" || password == "") {
            setInterval(() => {
                setError("")
            }, 5000)
            return setError("Please Fill in all of the Required Fields")
        }
        try{
            await UserLogin(email, password)
            navigate("/HomeRegistered")
        } catch (error) {
            if (error.code == "auth/user-not-found") {
                setInterval(() => {
                    setError("")
                }, 5000)
                return setError("User Not Found")
            }
            else if (error.code == "auth/wrong-password") {
                setInterval(() => {
                    setError("")
                }, 5000)
                return setError(" Wrong Password")
            }
            else {
                setInterval(() => {
                    setError("")
                }, 5000)
                return setError(`${error.message}`)
            }
        }
    }
    
    return (
        <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Election Platform</title>
            <link rel="shortcut icon" href="assets/images/fav.png" type="image/x-icon" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet" />
            <link rel="shortcut icon" href="assets/images/fav.jpg" />
            <link rel="stylesheet" href="../../assets/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
            <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
        </Helmet>

        <div className="whiteheader container-fluid bg-white">
        <div id="menu-jk" className={`nav-col text-white shadow-md mb-3 ${isMenuOpen ? 'open' : ''}`}>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 pt-2 pb-2 align-items-center">
                <img className="max-230 mt-2" src="assets/images/logo.png" alt=""/>
                <a data-bs-toggle="collapse" data-bs-target="#menu" className="float-end text-dark d-lg-none pt-1 ps-3"><i className="bi pt-1 fs-1 cp bi-list"></i></a>
            </div>
            <div id="menu" className="col-lg-6 d-none d-lg-block">
                <ul className="float-end mul d-inline-block">
                    <li className="float-md-start px-4 pe-1 pt-4">
                        <Link to="/results" className="fw-bold fs-8 text-primary"> View Result</Link>
                    </li>
                    <li className="float-md-start px-4 pe-1 py-3"> 
                    <Link to="/login" className="btn fw-bold fs-8 btn-outline-primary px-5 text-primary">Login</Link>
                    </li>
                    <li className="float-md-start px-4 pe-1 py-3">
                        <Link to="/register" className="btn fw-bold fs-8 btn-primary">Register as Voter</Link>
                    </li>
                    <li className="float-md-start px-4 pe-1 py-3">
                        <Link to="/home" className="btn fw-bold fs-8 btn-primary">Home</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
    </div>


        <div>
            <h1>Login</h1>
            {backError && <p>{backError}</p>}
            <form onSubmit={SubmitHandler} className="form">

            <div style={{ marginTop: '20px'}}>
                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" name="email" value={user.email} onChange={UserHandler} required /><br /><br />
            </div>
                <label htmlFor="password">Password:</label><br />
                <input type="password" id="password" name="password" value={user.password} onChange={UserHandler} required /><br /><br />

                <input type="submit" value="Login" />

                <div style={{ marginTop: '20px'}}>
                    <p className="forget">Don't have an account? <Link to={"/register"} className="link">Sign Up</Link></p>
                    <p className="forget">Forgot Password? <Link to={"/forget"} className="link">Forgot Password</Link></p>
                </div>

            </form>
            {err && <p>{err}</p>}
        </div>
        </div>
    );
}

export default Login;

