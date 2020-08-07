import React from "react";
import PhotoControlSlider from "./PhotoControlSlider";

class ToolsPhotocontrol extends React.Component {
  
    render() {
      return (
        <div className="container-fluid">
          <div className='tools-photocontrol-section'>
            <div className='row'>
                <div className='col-3 img-log-section'>
                        Log Section
                </div>
                <div className='col-9 img-slider-section'>
                    <PhotoControlSlider />
                </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default ToolsPhotocontrol;