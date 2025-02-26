import React from 'react'
import BarChart from '../components/BarChart'
import LineChart from '../components/LineChart'
import PieChart from '../components/PieChart'
import DoughnutChart from '../components/DoughnutChart'

const Dashboard = () => {
  return (
    <>
    <div style={{"padding":"20px"}}>
      <BarChart/>
      <LineChart/>
      <PieChart/>
      <DoughnutChart/>
    </div>
    </>
  )
}

export default Dashboard