import React from 'react';
import LightGallery from 'lightgallery/react';
import Images from "../../data/images.json";
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import './Gallery.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <><Navbar />
            <div className="GalleryContainer">
                <div className="Gallery">
                    <LightGallery
                        onInit={onInit}
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                    >
                        {Images.images.map((image) => (
                            <a key={image.id} href={image.url}>
                                <img alt={`img${image.id}`} src={image.url} />
                            </a>
                        ))}
                    </LightGallery>
                </div>
            </div>
            <Footer /></>

    );
}

export default Gallery;
