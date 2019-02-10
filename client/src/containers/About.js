import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div> 
            <Header />
            <div className="container col-md-5">
            <h3>สวัสดีครับ</h3>
            <p className="title text-justify mt-4 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h4 className="text-success">จาก เฮลตี้ คาเฟ่</h4>

            </div>

            <Footer company="Olanlab" email="olan@olanlab.com" />

        </div>
    )
}

export default About;