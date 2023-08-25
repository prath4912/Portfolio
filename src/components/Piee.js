import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import React from 'react'

const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];

export default function Piee() {
  return (
    <div className='text-light ch1'>
      <ResponsiveContainer className="" width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label = "Programming"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      </div>
  )
}
