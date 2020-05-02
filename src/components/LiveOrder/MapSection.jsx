import React from 'react';
import ReactMapGL, { FullscreenControl, NavigationControl,Filter } from 'react-map-gl'
import constants from '../../resources/constants';
import FormInput from './FormInput';

class MapSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: 1470,
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
                <FormInput label="Смена" className='map-section-search'/>
                <FullscreenControl position='top-right' />
                <NavigationControl showCompass showZoom position='top-right' />
            </ReactMapGL>
        )
    }
}

export default MapSection;