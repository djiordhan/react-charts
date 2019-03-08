import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import chartsData from '../data/chartsData';
import moment from 'moment';

class ChartsPage extends Component {
    render() {
        const data = chartsData[this.props.chartType];

        let xAxis = {};
        let yAxis = {};
        let series = [];
        let legend = [];
        let option;

        if ('activity' === this.props.chartType) {
            legend = [];
            let dates = data.map(activity => {
                return moment(activity.ts).format('DD/MM/YY');
            });

            let volumes = data.map(activity => {
                return activity.volume;
            });

            xAxis = {
                type: 'category',
                data: dates
            };

            yAxis = {
                type: 'value'
            };

            series = [{
                data: volumes,
                type: 'line'
            }];

            option = {
                xAxis,
                yAxis,
                series
            };
        } else if ('volume' === this.props.chartType) {
            legend = [];

            let dates = data.map(volume => {
                return moment(volume.ts).format('DD/MM/YY');
            });

            let volumes = data.map(volume => {
                return volume.volume;
            });

            xAxis = {
                type: 'category',
                data: dates
            };

            yAxis = {
                type: 'value'
            };

            series = [{
                data: volumes,
                type: 'line'
            }];

            option = {
                xAxis,
                yAxis,
                series
            };
        } else if ('usage' === this.props.chartType) {
            let totalUsage = 0;

            xAxis = {
                type: 'value'
            };

            yAxis = {
                type: 'category',
                data: ['Usage']
            };

            for (let usage of data.types) {
                totalUsage += usage.size;
            }

            legend = {
                data: data.types.map(usage => {
                    return usage.documentType;
                })
            };

            series = data.types.map(usage => {
                return {
                    name: usage.documentType,
                    type: 'bar',
                    stack: 'Usage',
                    label: usage.documentType,
                    data: [usage.size]
                };
            });

            let unused = data.maxAllowedUsage - totalUsage;

            console.log(unused);
            console.log(totalUsage);
            console.log(data.maxAllowedUsage);

            legend.data.push('Unused');
            series.push({
                name: 'Unused',
                type: 'bar',
                stack: 'Usage',
                data: [unused]
            });

            option = {
                xAxis,
                yAxis,
                series
            };
        }



        console.log(option);

        return (
            <div>
                <h3 className='text-upperase'> Showing {this.props.chartType} </h3>
                <ReactEcharts option={option} />
            </div>);
    }
}

export default ChartsPage;