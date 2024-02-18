import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/UserAuthContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function HomeRegistered({ userId }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate(); // Move outside the logout function
    const [selectedCandidateId, setSelectedCandidateId] = useState('');
    const { currentUser, logout, db } = useAuth(); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleVote = async () => {
        try {
            // Check if the user has already voted
            const voteRef = db.collection('votes').doc(currentUser.uid);
            const voteDoc = await voteRef.get();
            if (voteDoc.exists) {
                alert('You have already voted.');
                return;
            }

            // Add a new vote
            await voteRef.set({
                voterId: currentUser.uid,
                candidateId: selectedCandidateId,
            });

            alert('Vote submitted successfully!');
        } catch (error) {
            console.error('Error submitting vote:', error);
            alert('Failed to submit vote. Please try again later.');
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
                        <button onClick={logout} style={{ color: "000", padding: "5px 10px", cursor: 'pointer'}}></button>

                    </ul>
                </div>
            </div>
        </div>


            </div>

            <div className="container-xl big-padding">
                <div className="row section-title">
                <h2 className="fs-4">President of the World Elections</h2>
                    <p>This is the official site for the President of the World. This is very serious. Please vote wisely.</p>
                </div>
                <div className="row">
                <div class="col-lg-4 col-md-6">
                    <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                        <img className="rounded-pill shadow-md p-2" src="assets/images/testimonial/member-01.jpg" alt=""/>
                        <h4 class="mt-3 fs-5 mb-1 fw-bold">James Anderson</h4>
                        <h6 class="fs-7">Runnung to Be: <span class="text-primary fw-bold">President</span></h6>
                        <p class="text-dark mt-3 mb-3 fs-8">Aliquam utrum nibh rutrum nibh vitae tortor dapibus egestas. Cras condimentum dapibus tellus vel semper. Quisque vel dui molestie est auctor utrum nibh porttitor.</p>
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary fw-bolder fs-8">View Manifesto</button>
                            <button className="btn btn-danger fw-bolder px-4 ms-2 fs-8">Vote</button>
                    </div>
                </div>
                 <div class="col-lg-4 col-md-6">
                    <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                        <img className="rounded-pill shadow-md p-2" src="assets/images/testimonial/member-02.jpg" alt=""/>
                        <h4 class="mt-3 fs-5 mb-1 fw-bold">Arun Kumar</h4>
                        <h6 class="fs-7">Runnung to Be: <span class="text-primary fw-bold">President</span></h6>
                        <p class="text-dark mt-3 mb-3 fs-8">Aliquam utrum nibh rutrum nibh vitae tortor dapibus egestas. Cras condimentum dapibus tellus vel semper. Quisque vel dui molestie est auctor utrum nibh porttitor.</p>
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary fw-bolder fs-8">View Manifesto</button>
                            <button className="btn btn-danger fw-bolder px-4 ms-2 fs-8">Vote</button>
                    </div>
                </div>
                 <div class="col-lg-4 col-md-6">
                    <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                        <img className="rounded-pill shadow-md p-2" src="assets/images/testimonial/member-03.jpg" alt=""/>
                        <h4 class="mt-3 fs-5 mb-1 fw-bold">Pream Nath</h4>
                        <h6 class="fs-7">Runnung to Be: <span class="text-primary fw-bold">President</span></h6>
                        <p class="text-dark mt-3 mb-3 fs-8">Aliquam utrum nibh rutrum nibh vitae tortor dapibus egestas. Cras condimentum dapibus tellus vel semper. Quisque vel dui molestie est auctor utrum nibh porttitor.</p>
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary fw-bolder fs-8">View Manifesto</button>
                        <button className="btn btn-danger fw-bolder px-4 ms-2 fs-8">Vote</button>
                    </div>
                </div>
                
                 <div class="col-lg-4 col-md-6">
                    <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                        <img className="rounded-pill shadow-md p-2" src="assets/images/testimonial/member-04.jpg" alt=""></img>
                        <h4 class="mt-3 fs-5 mb-1 fw-bold">Reena Anath</h4>
                        <h6 class="fs-7">Runnung to Be: <span class="text-primary fw-bold">President</span></h6>
                        <p class="text-dark mt-3 mb-3 fs-8">Aliquam utrum nibh rutrum nibh vitae tortor dapibus egestas. Cras condimentum dapibus tellus vel semper. Quisque vel dui molestie est auctor utrum nibh porttitor.</p>
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary fw-bolder fs-8">View Manifesto</button>
                            <button  className="btn btn-danger fw-bolder px-4 ms-2 fs-8">Vote</button>
                    </div>
                </div>
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

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-6 fw-bold fs-5" id="exampleModalLabel">View Manifesto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className="molist">
                                {/* Modal content */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default HomeRegistered;