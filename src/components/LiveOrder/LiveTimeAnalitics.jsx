import React from 'react';
import Chart from 'react-apexcharts'

class LiveTimeAnalitics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {},
            series: [55, 17],
            labels: ['A', 'B', 'D']
        }
    }

    render() {
        return (
            <div className="donut">
                  <div className="analytics-second-part ">                
                    <Chart options={this.state.options} series={this.state.series} type="donut" width="450" />
                    <Chart options={this.state.options} series={this.state.series} type="donut" width="450" />
                </div>
                <div className="analytics-second-part">                
                    <Chart options={this.state.options} series={this.state.series} type="donut" width="450" />
                    <Chart options={this.state.options} series={this.state.series} type="donut" width="450" />
                </div>
            </div>
        );
    }
}

export default LiveTimeAnalitics;