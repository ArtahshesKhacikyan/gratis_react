import React from "react";
import ImageGallery from "react-image-gallery";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

class PhotoControlSlider extends React.Component {
  render() {
    return (
      <ImageGallery
        items={images}
        showBullets={true}
        disableThumbnailScroll={true}
        lazyLoad={true}
      />
    );
  }
}

export default PhotoControlSlider;
