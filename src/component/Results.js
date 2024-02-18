import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Results() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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

            <div className="container-xl big-padding">
                <div className="row section-title">
                    <h2 className="fs-4">Organization - The Master Brand Company</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                </div>
                <div className="row">
                <div class="row mb-5">
                <div class="col-md-6 mb-4">
                   <div class="row shado-md p-2 m-0 rounded shadow-md bg-white">
                       <div class="col-md-3">
                             <img className="rounded-pill max-130 p-2" src="assets/images/testimonial/member-01.jpg" alt=""></img>
                       </div>
                       <div class="col-md-9 align-self-center">
                           <h4 class="mt-3 fs-5 mb-1 fw-bold">James Anderson</h4>
                           <p class="fs-8 mb-2 fw-bold">Votes : 34,567</p>
                           <div class="progress">
                              <div class="progress-bar bg-danger" role="progressbar" aria-label="Example with label" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                          </div>
                       </div>
                   </div>
                </div>
                
                <div class="col-md-6 mb-4">
                   <div class="row shado-md p-2 m-0 rounded shadow-md bg-white">
                       <div class="col-md-3">
                             <img className="rounded-pill max-130 p-2" src="assets/images/testimonial/member-02.jpg" alt=""></img>
                       </div>
                       <div class="col-md-9 align-self-center">
                           <h4 class="mt-3 fs-5 mb-1 fw-bold">Arun Kumar</h4>
                           <p class="fs-8 mb-2 fw-bold">Votes : 34,567</p>
                           <div class="progress">
                              <div class="progress-bar bg-warning" role="progressbar" aria-label="Example with label" style={{width: '55%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">55%</div>
                          </div>
                       </div>
                   </div>
                </div>
                
                <div class="col-md-6 mb-4">
                   <div class="row shado-md p-2 m-0 rounded shadow-md bg-white">
                       <div class="col-md-3">
                             <img className="rounded-pill max-130 p-2" src="assets/images/testimonial/member-03.jpg" alt=""></img>
                       </div>
                       <div class="col-md-9 align-self-center">
                           <h4 class="mt-3 fs-5 mb-1 fw-bold">Pream Nath</h4>
                           <p class="fs-8 mb-2 fw-bold">Votes : 34,567</p>
                           <div class="progress">
                              <div class="progress-bar bg-primary" role="progressbar" aria-label="Example with label" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                          </div>
                       </div>
                   </div>
                </div>
                <div class="col-md-6 mb-4">
                   <div class="row shado-md p-2 m-0 rounded shadow-md bg-white">
                       <div class="col-md-3">
                             <img className="rounded-pill max-130 p-2" src="assets/images/testimonial/member-04.jpg" alt=""></img>
                       </div>
                       <div class="col-md-9 align-self-center">
                           <h4 class="mt-3 fs-5 mb-1 fw-bold">Reena Anath</h4>
                           <p class="fs-8 mb-2 fw-bold">Votes : 34,567</p>
                           <div class="progress">
                              <div class="progress-bar bg-success" role="progressbar" aria-label="Example with label" style={{width: '85%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                          </div>
                       </div>
                   </div>
                </div>
                
                 <div class="col-md-6 mb-4">
                   <div class="row shado-md p-2 m-0 rounded shadow-md bg-white">
                       <div class="col-md-3">
                             <img className="rounded-pill max-130 p-2" src="assets/images/testimonial/member-05.png" alt=""></img>
                       </div>
                       <div class="col-md-9 align-self-center">
                           <h4 class="mt-3 fs-5 mb-1 fw-bold">Allen Shory</h4>
                           <p class="fs-8 mb-2 fw-bold">Votes : 34,567</p>
                           <div class="progress">
                              <div class="progress-bar bg-success" role="progressbar" aria-label="Example with label" style={{width: '85%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                          </div>
                       </div>
                   </div>
                </div>
                
                 <div class="col-md-6 mb-4">
                   <div class="row shado-md p-2 m-0 rounded shadow-md bg-white">
                       <div class="col-md-3">
                             <img className="rounded-pill max-130 p-2" src="assets/images/testimonial/member-06.png" alt=""></img>
                       </div>
                       <div class="col-md-9 align-self-center">
                           <h4 class="mt-3 fs-5 mb-1 fw-bold">Aney Kumm</h4>
                           <p class="fs-8 mb-2 fw-bold">Votes : 34,567</p>
                           <div class="progress">
                              <div class="progress-bar bg-success" role="progressbar" aria-label="Example with label" style={{width: '85%'}} aria-valuenow="59" aria-valuemin="0" aria-valuemax="100">59%</div>
                          </div>
                       </div>
                   </div>
                </div>                </div>
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
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-6 fw-bold fs-5" id="exampleModalLabel">View Manifesto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className="molist">
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-6 fw-bold fs-5" id="exampleModalLabel">View Manifesto</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <ul class="molist">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu nibh et felis interdum accumsan. Pellentesque elit odio, interdum quis ante in, varius rhoncus orci.</li>
                    <li>Etiam laoreet dapibus ante at mollis. Morbi lobortis ultricies risus, in faucibus est blandit eu. Nunc nec imperdiet elit.</li>
                    <li>Praesent eget massa finibus, placerat tortor sed, pretium justo. Aenean et lectus accumsan, tincidunt metus sit amet, laoreet nunc.</li>
                    <li>In et tincidunt est. Sed neque sapien, ultricies a orci et, fringilla egestas nibh. Sed luctus eros et erat suscipit fermentum.</li>
                    <li>Cras blandit orci quis purus placerat tincidunt. Nunc ullamcorper iaculis nibh, sed dapibus dui lobortis nec.</li>
                    <li>Sed tristique ante ac rhoncus facilisis. Maecenas hendrerit velit a interdum convallis. Vivamus tempus eu justo nec rutrum. Praesent sollicitudin interdum nisl, at sollicitudin justo interdum vel</li>
                    <li>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc eget orci maximus, tincidunt nulla molestie, porta nisi. Integer fringilla lorem at lacinia iaculis. </li>
                    <li>Maecenas tempus libero laoreet est facilisis, vitae iaculis dui eleifend. Proin eget magna vitae diam dictum interdum at at nulla. Fusce eu porttitor felis. Aenean pretium lacinia nunc ut convallis.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Results;

