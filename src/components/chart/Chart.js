import React from 'react';

import ChartDubble from './ChartDubble';
import ChartGhrap from './ChartGhrap';
import Chartrevenew from './Chartrevenew';

const Chart = () => {

    // const { name, month, investment, revenue, sell } = chart;
    return (
        <div className='container my-5 mb-5'>
            <div className="row gap-5 ">
                <div className="col-md-12 smnone1 ">
                    <Chartrevenew></Chartrevenew>

                </div>

                <div>
                    <ChartGhrap></ChartGhrap>
                </div>
                <div className='col-12'>
                    <ChartDubble></ChartDubble>
                </div>
                <div className='mb-5'>

                </div>
            </div>
        </div>
    );
};

export default Chart;