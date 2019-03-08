import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import { getActivityOptions } from '../data/service';

class Activity extends Component {
    render() {
        return (<div>
            <h3 className='text-upperase'> Showing Activity </h3>
            <ReactEcharts option={getActivityOptions()} lazyUpdate={true} />
        </div>);
    }
}

export default Activity;