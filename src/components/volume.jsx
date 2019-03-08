import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import { getVolumeOptions } from '../data/service';

class Volume extends Component {
    render() {
        return (<div>
            <h3 className='text-upperase'> Showing Volume </h3>
            <ReactEcharts option={getVolumeOptions()} lazyUpdate={true} />
        </div>);
    }
}

export default Volume;