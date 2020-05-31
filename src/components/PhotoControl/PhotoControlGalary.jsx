import React from "react";
import { Carousel } from 'react-responsive-carousel';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"
const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

class PhotoControlGalary extends React.Component {


    render() {
        return (
            <div className="image-gallery-header">
                <ImageGallery items={images} />
                <div className='car-image-section'>
                    <img src="https://picsum.photos/id/1015/250/150/" alt="" />
                    <img src="https://picsum.photos/id/1015/250/150/" alt="" />
                    <img src="https://picsum.photos/id/1015/250/150/" alt="" />
                    <img src="https://picsum.photos/id/1015/250/150/" alt="" />
                    <img src="https://picsum.photos/id/1015/250/150/" alt="" />
                    <img src="https://picsum.photos/id/1015/250/150/" alt="" />
                </div>
                <div className='car-texnical-doc-header'>
                    <div className='car-texnical-doc'>
                        <img src="https://picsum.photos/id/1015/250/150/" alt="" />
                        <img src="https://picsum.photos/id/1015/250/150/" alt="" />
                    </div>
                    <div className='car-texnical-doc'>
                        <img src="https://picsum.photos/id/1015/250/150/" alt="" />
                        <img src="https://picsum.photos/id/1015/250/150/" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default PhotoControlGalary;