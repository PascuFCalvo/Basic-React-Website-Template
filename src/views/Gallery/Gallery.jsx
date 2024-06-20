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
import { useEffect, useState } from 'react';

export default function Gallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const loadImages = async () => {
            const images = [];
            for (const image of Images.images) {
                const img = await import(`../../assets/Images/${image.img}`);
                images.push({
                    src: img.default,
                    thumb: img.default,
                    subHtml: image.subHtml
                });
            }
            setImages(images);
        };

        loadImages();
    }, []);

    return (
        <div>
            <Navbar />

        <div className="Gallery">
            <LightGallery className="gallery" plugins={[lgThumbnail, lgZoom]} galleryId="gallery">
                {images.map((image, index) => (
                    <a href={image.src} data-sub-html={image.subHtml} key={index}>
                        <img src={image.thumb} alt={image.subHtml} />
                    </a>
                ))}
            </LightGallery>
        </div>
            <Footer />
        </div>
    ); 
}
