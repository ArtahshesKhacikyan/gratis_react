import React from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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
    constructor(props){
        super(props);
        this.state={
            images: [
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
            ]
        }
    }

    render() {
        console.log("This props", this.state.images)
        return (
            <div className="image-gallery-header">
                <ImageGallery items={this.state.images} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      getPhotoCantrolDataResponse: state.photoControl.getPhotoCantrolDataResponse,
    };
  }

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
        
      },
      dispatch
    );
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PhotoControlGalary);