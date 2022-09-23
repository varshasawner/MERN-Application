import React from "react";
import loginpic from '../images/login.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <section className="signup">
                <div className="container mt-5 signupbox">
                    <div className="signup-image mt-5">
                        <img src={loginpic} className="img-fluid" />
                        <p className='text-center mt-4'><Link to="/register" class="nav-link me-4 text-primary">Create An Account !!</Link></p>
                    </div>
                    <div className="signup-form mt-5">
                        <h2 className='form-title text-center mb-4'>Sign In</h2>
                        <form className='register-form'>

                            <div class="input-group border-bottom mb-3">
                                <span class="input-group-text"><i class="zmdi zmdi-email"></i></span>
                                <input type="email" class="form-control" placeholder="Enter Email" />
                            </div>
                            
                            <div class="input-group border-bottom mb-3">
                                <span class="input-group-text"><i class="zmdi zmdi-lock"></i></span>
                                <input type="password" class="form-control" placeholder="Enter Password" />
                            </div>

                            <div class="input-group border-bottom mb-3">
                                <input type="submit" class="btn btn-primary" value="Login" />
                            </div>

                        </form>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Login;