import React from "react";
import Lightbox from "react-images-zoom";
import userImage from "../../../assets/images/userimage.jpg";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

class VerificationImageSlider extends React.Component {
  render() {
    return (
        <ImageGallery items={images} />
    );
  }
}

export default VerificationImageSlider;
