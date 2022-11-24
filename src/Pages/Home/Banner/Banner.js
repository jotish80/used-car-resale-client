import React from 'react';
import banner from '../../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero w-full h-[600px] my-10" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">My Used Cars</h1>
                    <p className="mb-5">“I’ve always been into cars. Cars are part of our genetic makeup. It’s unavoidable.”  </p>
                    <button className="btn btn-outline btn-info">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;