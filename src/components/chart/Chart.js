import React from 'react';

import ChartDubble from './ChartDubble';
import ChartGhrap from './ChartGhrap';
import Chartrevenew from './Chartrevenew';

const Chart = () => {

    // const { name, month, investment, revenue, sell } = chart;
    return (
        <div className='container mt-5'>
            <div className="row gap-5 ">
                <div className="col-md-12 ">
                    <Chartrevenew></Chartrevenew>
                </div>
                <div className="col-md-7">
                    <ChartGhrap></ChartGhrap>
                </div>
                <div>
                    <ChartDubble></ChartDubble>
                </div>
            </div>
        </div>
    );
};

export default Chart;