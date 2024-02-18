import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/UserAuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css'; 

const Register = () => {
    const navigate= useNavigate()
    const { error, Register, currentuser } = useAuth();
    const [err, setError] = useState('');
    const [backError, setBackError] = useState('');
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        province: '',
        password: '',
        confirmPassword: ''
    });

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setBackError('');
            }, 5000);
            setBackError(error);
        }
    }, [error, currentuser]);

    const UserHandler = (e) => {
        const { name, value } = e.target;
        setUser((prev) => {
            return {
                ...prev,
                [name]: value
            };
        });
    };

    const SubmitHandler = async (e) => {
        e.preventDefault();
        const { email, password, confirmPassword, firstName, lastName, province } = user;
        if (password === '' || confirmPassword === '' || email === '' || firstName === '' || lastName === '' || province === '') {
            setTimeout(() => {
                setError('');
            }, 5000);
            return setError(' Please fill in all the required fields');
        } else if (password !== confirmPassword) {
            setInterval(() => {
                setError("")
            }, 5000)
            return setError('Passwords do not match')
        } else if (password.length < 6 || confirmPassword.length < 6) {
            setInterval(() => {
                setError("")
            }, 5000)
            return setError("Password must be greater than 6 Characters in length")
        } else {
                 Register(email, password, firstName, lastName, province);
        } 
    };

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
                <div className="col-lg-7 pt-2 pb-2 align-items-center">
                    <img className="max-230 mt-2" src="assets/images/logo.png" alt=""/>
                    <a data-bs-toggle="collapse" data-bs-target="#menu" className="float-end text-dark d-lg-none pt-1 ps-3"><i className="bi pt-1 fs-1 cp bi-list"></i></a>
                </div>
                <div id="menu" className="col-lg-8 d-none d-lg-block">
                    <ul className="float-right mul d-inline-block">
                        <li className="float-md-start px-4 pe-1 pt-2">
                            <Link to="/results" className="fw-bold fs-8 text-primary"> View Result</Link>
                        </li>
                        <li className="float-md-start px-4 pe-1 py-1"> 
                        <Link to="/login" className="btn fw-bold fs-8 btn-outline-primary px-5 text-primary">Login</Link>
                        </li>
                        <li className="float-md-start px-4 pe-1 py-1">
                            <Link to="/register" className="btn fw-bold fs-8 btn-primary">Register as Voter</Link>
                        </li>
                        <li className="float-md-start px-4 pe-1 py-1">
                        <Link to="/home" className="btn fw-bold fs-8 btn-primary">Home</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </div>


    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '85vh' }}>

        <div>
            <h1>Register</h1>
            {backError && <p>{backError}</p>}
            <form onSubmit={SubmitHandler} className="form">
                <div style={{ marginTop: '20px'}}>
                <label htmlFor="firstName">First Name:</label><br />
                <input type="text" id="firstName" name="firstName" value={user.firstName} onChange={UserHandler} required /><br /><br />
                </div>

                <label htmlFor="lastName">Last Name:</label><br />
                <input type="text" id="lastName" name="lastName" value={user.lastName} onChange={UserHandler} required /><br /><br />

                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" name="email" value={user.email} onChange={UserHandler} required /><br /><br />

                <label htmlFor="province">Province:</label><br />
                <select id="province" name="province" value={user.province} onChange={UserHandler} required>
                    <option value="Choose province"></option>
                    <option value="Eastern Cape">Eastern Cape</option>
                    <option value="Free State">Free State</option>
                    <option value="Gauteng">Gauteng</option>
                    <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                    <option value="Limpopo">Limpopo</option>
                    <option value="Mpumalanga">Mpumalanga</option>
                    <option value="North West">North West</option>
                    <option value="Northern Cape">Northern Cape</option>
                    <option value="Western Cape">Western Cape</option>
                </select><br /><br />

                <label htmlFor="password">Password:</label><br />
                <input type="password" id="password" name="password" value={user.password} onChange={UserHandler} required /><br /><br />

                <label htmlFor="confirmPassword">Confirm Password:</label><br />
                <input type="password" id="confirmPassword" name="confirmPassword" value={user.confirmPassword} onChange={UserHandler} required /><br /><br />

                <input type="submit" value="Register" />

                <div style={{ marginTop: '20px'}}>
                    <p className="forget">Already have an account? <Link to={"/login"} className="link">Login</Link></p>
                </div>

            </form>
            {err && <p>{err}</p>}
        </div>
        </div>
        </div>
    );
};

export default Register;
