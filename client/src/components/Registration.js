import React from 'react';
import loginpic from '../images/login.png';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <>
            <section className="signup">
                <div className="container mt-5 signupbox">
                    <div className="signup-form">
                        <h2 className='form-title text-center mb-4'>Sign Up</h2>
                        <form className='register-form'>
                            <div class="input-group border-bottom mb-3">
                                <span class="input-group-text"><i class="zmdi zmdi-account"></i></span>
                                <input type="text" class="form-control" placeholder="Enter Name" />
                            </div>
                            <div class="input-group border-bottom mb-3">
                                <span class="input-group-text"><i class="zmdi zmdi-email"></i></span>
                                <input type="email" class="form-control" placeholder="Enter Email" />
                            </div>
                            <div class="input-group border-bottom mb-3">
                                <span class="input-group-text"><i class="zmdi zmdi-lock"></i></span>
                                <input type="password" class="form-control" placeholder="Enter Password" />
                            </div>
                            <div class="input-group border-bottom mb-3">
                                <span class="input-group-text"><i class="zmdi zmdi-lock"></i></span>
                                <input type="password" class="form-control" placeholder="Enter Confirm password" />
                            </div>
                            <div class="input-group border-bottom mb-3">
                                <span class="input-group-text"><i class="zmdi zmdi-phone-in-talk"></i></span>
                                <input type="number" class="form-control" placeholder="Enter Contact" size="27"/>
                            </div>
                            <div class="input-group border-bottom mb-3">
                                <span class="input-group-text"><i class="zmdi zmdi-laptop-chromebook"></i></span>
                                <input type="text" class="form-control" placeholder="Enter Profession" />
                            </div>
                            <div class="input-group border-bottom mb-3">
                                <input type="submit" class="btn btn-primary"  value="Register"/>
                            </div>

                        </form>
                    </div>
                    <div className="signup-image">
                        <img src={loginpic} className="img-fluid"/>
                        <p className='text-center mt-4'><Link to="/login" class="nav-link me-4 text-primary">I am Already Registered !!</Link></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Registration;