import chartsData from './chartsData';
import moment from 'moment';

export function getActivityOptions() {
    let data = chartsData.activity;

    let dates = data.map(activity => {
        return moment(activity.ts).format('DD/MM/YY');
    });

    let volumes = data.map(activity => {
        return activity.volume;
    });

    let xAxis = {
        type: 'category',
        data: dates
    };

    let yAxis = {
        type: 'value'
    };

    let series = [{
        data: volumes,
        type: 'line'
    }];

    return { xAxis, yAxis, series };
}

export function getUsageOptions() {
    let data = chartsData.usage;

    let totalUsage = 0;

    let xAxis = {
        type: 'value'
    };

    let yAxis = {
        type: 'category',
        data: ['Usage']
    };

    for (let usage of data.types) {
        totalUsage += usage.size;
    }

    let legend = {
        data: data.types.map(usage => {
            return usage.documentType;
        })
    };

    let series = data.types.map(usage => {
        return {
            name: usage.documentType,
            type: 'bar',
            stack: 'Usage',
            label: usage.documentType,
            data: [usage.size]
        };
    });

    let unused = data.maxAllowedUsage - totalUsage;

    legend.data.push('Unused');
    series.push({
        name: 'Unused',
        type: 'bar',
        stack: 'Usage',
        data: [unused]
    });

    return {
        legend,
        xAxis,
        yAxis,
        series
    };
}

export function getVolumeOptions() {
    let data = chartsData.volume;

    let dates = data.map(volume => {
        return moment(volume.ts).format('DD/MM/YY');
    });

    let volumes = data.map(volume => {
        return volume.volume;
    });

    let xAxis = {
        type: 'category',
        data: dates
    };

    let yAxis = {
        type: 'value'
    };

    let series = [{
        data: volumes,
        type: 'line'
    }];

    return { xAxis, yAxis, series };
}