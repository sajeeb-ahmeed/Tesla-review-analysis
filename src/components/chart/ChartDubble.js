import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hook/useChart';

const ChartDubble = () => {
    const [chart] = useChart()
    return (
        <div className='my-4'>
            <ResponsiveContainer width="100%" height={200}>
                <AreaChart
                    width={500}
                    height={200}
                    data={chart}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="100%" height={200}>
                <AreaChart
                    width={500}
                    height={200}
                    data={chart}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area connectNulls type="monotone" dataKey="revenue" stroke="#9631de" fill="#3a4cf0" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ChartDubble;