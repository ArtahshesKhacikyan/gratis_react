import React from 'react';
import ReactMapGL, {Marker} from 'react-map-gl'
import constants from '../../resources/constants';

class MapSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: 'inherit',
                height: 700,
                latitude: 40.177377,
                longitude: 44.512619,
                zoom: 16
            }
        }
    }

    render() {
        return (
            <ReactMapGL
                className="map-box-section"
                {...this.state.viewport}
                mapStyle={constants.mapSectionCredientials.mapStyle}
                mapboxApiAccessToken={constants.mapSectionCredientials.apiAccessToken}
                onViewportChange={(viewport) => this.setState({ viewport })}>
            </ReactMapGL>
        )
    }
}

export default MapSection;