import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import { getUsageOptions } from '../data/service';

class Usage extends Component {
    render() {
        return (<div>
            <h3 className='text-upperase'> Showing Usage </h3>
            <ReactEcharts option={getUsageOptions()} />
        </div>);
    }
}

export default Usage;