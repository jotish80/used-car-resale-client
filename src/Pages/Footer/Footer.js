import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        
        <>
        <footer className="footer p-32 bg-black text-white mt-12">
            <div>
                 <img className='w-[100px] bg-white' src={logo} alt="" />
                <p>Personal Cars Resale.<br />Providing quality cars since 1992</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link to="/" className="link link-hover">Branding</Link>
                <Link to="/" className="link link-hover">Design</Link>
                <Link to="/" className="link link-hover">Marketing</Link>
                <Link to="/" className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to="/" className="link link-hover">About us</Link>
                <Link to="/" className="link link-hover">Contact</Link>
                <Link to="/" className="link link-hover">Jobs</Link>
                <Link to="/" className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link to="/" className="link link-hover">Terms of use</Link>
                <Link to="/" className="link link-hover">Privacy policy</Link>
                <Link to="/" className="link link-hover">Cookie policy</Link>  
            </div>         
        </footer>
        <div className="text-white text-center p-3 mt-[-100px]">
                        <p>Copyright &copy; {year}, All Right Reserved</p>
                    </div>
        </>
    );
};

export default Footer;