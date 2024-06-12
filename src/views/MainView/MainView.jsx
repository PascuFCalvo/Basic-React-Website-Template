import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./MainView.css";
import Logo from '../../components/Logo/Logo';
import SectionGrid from '../../components/SectionGrid/SectionGrid';

const MainView = () => {
    return (
        <div className="main-container">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="body">
                <div className="LogoContainer">
                    <Logo className="Logo" alto="200px" ancho="600px" />
                </div>
                <h1 className="Title">Bienvenidos a la página de la empresa</h1>
                <h2 className="Subtitle">Aquí encontrarás información sobre nuestros servicios y productos</h2>
                <p className="Description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget justo et nunc
                    lacinia elementum. Nullam nec odio sit amet justo ultricies lacinia. Nulla
                    facilisi. Nullam nec odio sit amet justo ultricies lacinia. Nulla facilisi.
                    Nullam nec odio sit amet justo ultricies lacinia. Nulla facilisi.
                </p>
                <div className='SectionGridContainer'>
                    <SectionGrid />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainView;
