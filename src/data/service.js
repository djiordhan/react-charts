import chartsData from './chartsData';
import moment from 'moment';

export function getActivityOptions() {
    let data = chartsData.activity;

    return {
        xAxis: {
            type: 'category',
            data: data.map(activity => {
                return moment(activity.ts).format('DD/MM/YY');
            })
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: data.map(activity => {
                return activity.volume;
            }),
            type: 'line',
            animationDelay: function (idx) {
                return idx * 10;
            }
        }]
    };
}

export function getUsageOptions() {
    let data = chartsData.usage;

    return {
        legend: {
            data: data.types.map(usage => {
                return usage.documentType;
            })
        },
        xAxis: {
            type: 'value',
            max: data.maxAllowedUsage
        },
        yAxis: {
            type: 'category',
            data: ['Usage']
        },
        series: data.types.map(usage => {
            return {
                name: usage.documentType,
                type: 'bar',
                stack: 'Usage',
                label: usage.documentType,
                data: [usage.size],
                animationDelay: function (idx) {
                    return idx * 10;
                }
            };
        })
    };
}

export function getVolumeOptions() {
    let data = chartsData.volume;

    return {
        xAxis: {
            data: data.map(volume => moment(volume.ts).format('DD/MM/YY')),
            splitLine: {
                show: true
            }
        },
        yAxis: {},
        series: [{
            name: 'Volume',
            type: 'bar',
            data: data.map(volume => {
                return volume.volume;
            }),
            animationDelay: function (idx) {
                return idx * 10;
            }
        }]
    };
}