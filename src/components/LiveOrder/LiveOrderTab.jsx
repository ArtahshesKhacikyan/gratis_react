import React from 'react';
import SearchBoxInput from './SearchBoxInput';
import FormInput from './FormInput';
import { Tabs, Tab } from 'react-bootstrap';
import { faGlobeAfrica, faChartLine, faTable } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MapSection from './MapSection';
import LiveTimeAnalitics from './LiveTimeAnalitics';

class LiveOrderTab extends React.Component {
    render() {
        return (
            <div className="live-tab-section">

                <div className="map-and-table-section">
                    <Tabs
                        id="map-section-tab"
                        className="map-section-tab"
                    >
                        <Tab eventKey="map" title={
                            <FontAwesomeIcon icon={faGlobeAfrica}
                            />
                        }
                            className=''>
                            <MapSection />

                        </Tab>
                        <Tab
                            eventKey="table"
                            title={
                                <FontAwesomeIcon icon={faTable} />
                            }>
                            <FormInput />
                            <SearchBoxInput />
                            <FormInput />
                            <FormInput />

                        </Tab>
                        <Tab eventKey="chart-line" title={
                            <FontAwesomeIcon icon={faChartLine} />
                        }
                            className=''>
                            <LiveTimeAnalitics />
                        </Tab>
                    </Tabs>
                </div>
            </div >
        )
    }
}

export default LiveOrderTab;