import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart1 = ({ data,title }) => {
    console.log("all chart data", data);

    return (
        <div className='border'>
            <div className='bg-primary p-1'><h3>{title ||"Pie Chart"}</h3></div>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="labels" interval={0} textAnchor="middle" angle={-45} height={100} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="values" fill="rgba(75, 192, 192, 0.5)" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart1;
