import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Results() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [candidates, setCandidates] = useState([]);
    const [totalVotes, setTotalVotes] = useState(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        getCandidates();
    }, []);

    const getCandidates = async () => {
        try {
            const candidatesCollection = collection(db, 'candidates');
            const snapshot = await getDocs(candidatesCollection);
            const candidatesData = snapshot.docs.map(doc => doc.data());
            const total = candidatesData.reduce((acc, curr) => acc + curr.count, 0);
            setCandidates(candidatesData);
            setTotalVotes(total);
        } catch (error) {
            console.error('Error fetching candidates:', error);
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
                <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
            </Helmet>

            <div className="whiteheader container-fluid bg-white">
                <div id="menu-jk" className={`nav-col text-white shadow-md mb-3 ${isMenuOpen ? 'open' : ''}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 pt-2 pb-2 align-items-center">
                                <img className="max-230 mt-2" src="assets/images/logo.png" alt="" />
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

            <div className="container-xl big-padding">
                <div className="row section-title">
                    <h2 className="fs-4">President of the World Elections</h2>
                    <p>This is the official site for the President of the World. This is very serious. Please vote wisely.</p>
                </div>

                <div>
                    <div className="row">
                        {candidates.map(candidate => (
                            <div key={candidate.id} className="col-lg-4 col-md-6">
                                <div className="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                                    <img className="rounded-pill shadow-md p-2" src={candidate.image} alt={`${candidate.firstName} ${candidate.lastName}`} />
                                    <h4 className="mt-3 fs-5 mb-1 fw-bold">{`${candidate.firstName} ${candidate.lastName}`}</h4>
                                    <h6 className="fs-7">Running to Be: <span className="text-primary fw-bold">{candidate.position}</span></h6>
                                    <p className="text-dark mt-3 mb-3 fs-8">Votes: {candidate.count}</p>
                                    <p className="text-dark mt-3 mb-3 fs-8">Percentage: {totalVotes > 0 ? ((candidate.count / totalVotes) * 100).toFixed(2) : 0}%</p>
                                    <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${(candidate.count / totalVotes) * 100}%` }} aria-valuenow={candidate.count} aria-valuemin="0" aria-valuemax="100">{''}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="copy">
                <div className="container">
                    <a href="https://www.smarteyeapps.com/">2022 &copy; All Rights Reserved | Designed and Developed by Smarteyeapps.com</a>
                    <span>
                        <a href=""><i className="fab fa-github"></i></a>
                        <a href=""><i className="fab fa-google-plus-g"></i></a>
                        <a href="https://in.pinterest.com/prabnr/pins/"><i className="fab fa-pinterest-p"></i></a>
                        <a href="https://twitter.com/prabinraja89"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com/freewebtemplatesbysmarteye"><i className="fab fa-facebook-f"></i></a>
                    </span>
                </div>
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                {/* Modal content */}
            </div>
        </div>
    );
}

export default Results;


