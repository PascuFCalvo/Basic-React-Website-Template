import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Logo from '../../components/Logo/Logo';
import SectionLeft from '../../components/SectionLeft/SectionLeft';
import SectionRight from '../../components/SectionRight/SectionRight';
import './ServicesView.css';
import Footer from '../../components/Footer/Footer';
import articleData from "../../data/articulos.json"

function ServicesView() {
    return (
        <>
            <Navbar />
            <div className='body'>
                <Logo alto="100px" ancho="300px" />
                <SectionLeft img1={articleData[1].link_foto} text={articleData[1].noticia} />
                <SectionRight img1={articleData[2].link_foto} text={articleData[2].noticia} />
                <SectionLeft img1={articleData[3].link_foto} text={articleData[3].noticia} />
                <SectionRight img1={articleData[4].link_foto} text={articleData[4].noticia} />
            </div>
            <Footer />
        </>
    );
}

export default ServicesView;