import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart1 = ({data}) => {
  

    return (
        <div className='border'>
            <div className='bg-primary p-1'> <h3>Recharts Area Chart</h3></div>
            <AreaChart width={500} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="location" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="value" stroke="rgba(75, 192, 192, 1)" fill="rgba(75, 192, 192, 0.5)" />
            </AreaChart>
        </div>
    );
};

export default Chart1;