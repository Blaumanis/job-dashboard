import React from 'react'
import StatsBoxes from '../components/StatsBoxes'
import '../styles/_dashboard.scss'
import BarChart from '../components/BarChart'

const Dashboard = () => {
  return (
    <main className='dashboard-container'>
      <StatsBoxes />
      <div className='chart-wrapper'>
        <h2 className='monthly'>Monthly Applications</h2>
        <BarChart />
      </div>
    </main>
  )
}

export default Dashboard
