import React from "react";
import userpic from '../images/user.png';

const About = () => {
    return (
        <>
            <div className="about_box my-5">
                <div className="container p-4">
                    <div className="row about_row">
                        <div className="user_profile">
                            <img src={userpic} className="img-fluid" height="200px" width="200px"/>
                            <a href="" className="ms-5">Edit Profile</a>
                        </div>
                        <div className="user_content p-5">
                            <table class="table table-striped table-responsive me-5">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <td>Doe</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>Moe</td>
                                    </tr>
                                    <tr>
                                        <th>Contact</th>
                                        <td>Dooley</td>
                                    </tr>
                                    <tr>
                                        <th>Work</th>
                                        <td>Dooley</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;